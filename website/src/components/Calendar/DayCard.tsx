import { EVENTS_COLOR } from "@/constants";
import { EventColor, ScheduleEventType } from "@/types";
import { EventWithRelations } from "@/types/supabase";
import React from "react";

export default function DayCard({
  day,
  events,
}: {
  day: number;
  events: EventWithRelations[];
}) {
  const uniqueTypes = Array.from(
    new Set(events.map((e) => e.type.name as ScheduleEventType)),
  );
  const colors: EventColor[] = uniqueTypes.map((type) => EVENTS_COLOR[type]);

  return (
    <div className="flex flex-col items-center justify-between border p-2 min-h-20">
      <span className="text-sm font-semibold">{day}</span>
      <div className="w-full h-fit flex flex-row flex-wrap items-center justify-center gap-1">
        {colors.map((c, k) => (
          <span
            key={k}
            className={`${c.bg} w-[16%] aspect-square rounded-[1px] inline-block`}
          ></span>
        ))}
      </div>
    </div>
  );
}
