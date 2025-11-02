"use client";

import { EventService } from "@/services/eventService";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";
import WeekCard from "./WeekCard";
import DayCard from "./DayCard";
import { LocationName, Location } from "@/types";

export default function Horarios({ className }: { className: string }) {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] =
    useState<LocationName>("Catedral");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("Buscando eventos do Supabase...");
        const events = await EventService.getEvents();
        console.log("Eventos recebidos:", events);
        const groupedLocations = EventService.groupEventsByLocation(events);
        console.log("Locations agrupadas:", groupedLocations);
        setLocations(groupedLocations);
      } catch (error) {
        console.error("Erro ao carregar eventos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectedLoc = locations.find(
    (location) => location.name === selectedLocation,
  );
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(
    new Date().getDay(),
  );

  const weekName = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const isLocationName = (value: string): value is LocationName =>
    [
      "Catedral",
      "São Jose",
      "Santa Cruz",
      "Santana",
      "Sagrada Família",
      "São Joao",
      "Santa Teresa",
      "São Joaquim",
    ].includes(value);

  return (
    <>
      <section className={`${className} w-[1280px] p-4 border rounded`}>
        <h2>Horários da Semana</h2>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <p>Carregando horários...</p>
          </div>
        ) : locations.length === 0 ? (
          <div className="flex justify-center items-center py-10">
            <div className="text-center">
              <p className="text-red-600 font-semibold">
                Nenhuma localização encontrada
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Verifique se o arquivo .env.local está configurado corretamente
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Abra o console (F12) para mais detalhes
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="w-full max-w-82 mb-2 mt-[-10px]">
              <Select
                value={selectedLocation}
                onValueChange={(value) => {
                  if (isLocationName(value)) setSelectedLocation(value);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione uma comunidade" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {locations.map((location) => (
                    <SelectItem key={location.id} value={location.name}>
                      {location.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-full gap-2 justify-between bg-gray-100 rounded">
              {weekName.map((n, k) => (
                <WeekCard
                  key={k}
                  n={n}
                  k={k}
                  selectedWeekDay={selectedDayIndex}
                  setSelectedWeekDay={setSelectedDayIndex}
                />
              ))}
            </div>

            <div className="flex w-full gap-2 rounded">
              {selectedLoc?.events
                .filter((ev) => ev.date.getDay() === selectedDayIndex)
                .map((event, idx) => (
                  <DayCard key={idx} event={event} />
                ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
