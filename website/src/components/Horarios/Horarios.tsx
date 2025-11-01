"use client";

import { LOCATIONS } from "@/constants";
import HorarioCard from "./HorarioCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { useEffect, useState, useMemo } from "react";
import { ScheduleEvent } from "@/types";

export default function Horarios({ className }: { className: string }) {
  const standardLocation = "catedral";
  const standardDay = new Date()
    .toLocaleDateString("pt-BR", { weekday: "long" })
    .replace("-feira", "")
    .toUpperCase();
  const [selectedLocation, setSelectedLocation] = useState(standardLocation);
  const weekName = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const [selectedWeekDay, setSelectedWeekDay] = useState();

  const days = useMemo(
    () => ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
    [],
  );

  // Agora cada dia pode ter vários eventos
  const [week, setWeek] = useState<Record<string, ScheduleEvent[]>>({
    DOM: [],
    SEG: [],
    TER: [],
    QUA: [],
    QUI: [],
    SEX: [],
    SÁB: [],
  });

  useEffect(() => {
    const location = LOCATIONS.find((x) => x.id === selectedLocation);
    const newWeek: Record<string, ScheduleEvent[]> = {
      DOM: [],
      SEG: [],
      TER: [],
      QUA: [],
      QUI: [],
      SEX: [],
      SÁB: [],
    };

    if (location && location.events) {
      location.events.forEach((event) => {
        const key = days[event.date.getDay()];
        newWeek[key].push(event);
      });
    }

    setWeek(newWeek);
  }, [selectedLocation, days]);

  return (
    <>
      <section className={`${className} w-[1280px] p-4 border rounded`}>
        <h2>Horários da Semana</h2>
        <div className="w-full max-w-82 mb-2 mt-[-10px]">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione uma comunidade" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {LOCATIONS.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full gap-2 justify-between bg-gray-100">
          {weekName.map((n, k) => (
            <div key={k} className="px-8 py-2 rounded">
              {n}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
