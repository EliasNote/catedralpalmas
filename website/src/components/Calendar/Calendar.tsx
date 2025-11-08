"use client";

import React, { useEffect, useState } from "react";
import DayCard from "./DayCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { EventService } from "@/services/eventService";
import { EventWithRelations } from "@/types/supabase";
import { EVENTS_COLOR } from "@/constants";

export default function Calendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<EventWithRelations[]>([]);

  const lastDay = new Date(year, month + 1, 0).getDate();
  const daysMonth = [];
  let monthName = new Date(year, month).toLocaleString("pt-BR", {
    month: "long",
  });
  monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const firstDayWeek = new Date(year, month, 1).getDay();

  for (let i = 1; i <= lastDay; i++) {
    daysMonth.push(i);
  }

  function minusDate() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  function plusDate() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setEvents(await EventService.getEvents());
      } catch (error) {
        console.error("Erro ao carregar eventos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-200 w-full flex flex-col gap-2 ">
      <div className="flex gap-5 items-center justify-between max-w-60 mb-3">
        <p className="font-bold text-[20px]">{`${monthName} ${year}`}</p>
        <div className="flex gap-1">
          <FiChevronLeft
            className="cursor-pointer hover:bg-gray-200 rounded"
            size={28}
            onClick={minusDate}
          />
          <FiChevronRight
            className="cursor-pointer hover:bg-gray-200 rounded"
            size={28}
            onClick={plusDate}
          />
        </div>
      </div>
      <div className="flex flex-row w-full h-fit gap-2">
        {Object.keys(EVENTS_COLOR).map((eventType, k) => {
          const colors = EVENTS_COLOR[eventType as keyof typeof EVENTS_COLOR];
          return (
            <div
              className="flex items-center gap-2 border rounded px-2 py-1"
              key={k}
            >
              <div className={`w-4 h-4 rounded-[2px] ${colors.bg}`} />
              <p>{eventType}</p>
            </div>
          );
        })}
      </div>
      <div className="max-w-200 w-full mx-auto border rounded">
        <div className="grid grid-cols-7">
          {diasSemana.map((dia, index) => (
            <div
              key={index}
              className="text-center font-bold py-2 bg-amber-100"
            >
              {dia}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0.5 w-full p-0.5">
          {Array.from({ length: firstDayWeek }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {daysMonth.map((d, k) => {
            const eventsForDay = events.filter(
              (event) =>
                new Date(event.date).getDay() === d &&
                new Date(event.date).getMonth() === month &&
                new Date(event.date).getFullYear() === year,
            );
            return <DayCard key={k} day={d} events={eventsForDay} />;
          })}
        </div>
      </div>
    </div>
  );
}
