"use client";

import { EventWithRelations } from "@/types/supabase";
import DayCard from "./DayCard";

export default function Calendar({
  diasSemana,
  firstDayWeek,
  daysMonth,
  events,
  monthName,
  month,
  year,
}: {
  diasSemana: string[];
  firstDayWeek: number;
  daysMonth: number[];
  events: EventWithRelations[];
  monthName: string;
  month: number;
  year: number;
}) {
  return (
    <>
      <div className="max-w-200 w-full mx-auto border rounded overflow-x-auto">
        <div className="grid grid-cols-7">
          {diasSemana.map((dia, index) => (
            <div
              key={index}
              className="text-center font-bold py-2 bg-amber-100 text-xs sm:text-sm md:text-base"
            >
              <span className="hidden sm:inline">{dia}</span>
              <span className="sm:hidden">{dia.substring(0, 3)}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0.5 w-full p-0.5">
          {Array.from({ length: firstDayWeek }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {daysMonth.map((d, k) => {
            const eventsForDay = events.filter((event) => {
              const [yearStr, monthStr, dayStr] = event.date.split("-");
              const eventYear = Number(yearStr);
              const eventMonth = Number(monthStr) - 1;
              const eventDay = Number(dayStr);

              return (
                eventDay === d && eventMonth === month && eventYear === year
              );
            });
            return (
              <DayCard
                monthName={monthName}
                key={k}
                day={d}
                events={eventsForDay}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
