import { EVENTS_COLOR } from "@/constants";
import { EventColor, ScheduleEventType } from "@/types";
import { EventWithRelations } from "@/types/supabase";
import { motion } from "framer-motion";
import React from "react";

export default function DayCard({
  day,
  events,
}: {
  day: number;
  events: EventWithRelations[];
}) {
  const [isHover, setIsHover] = React.useState(false);

  const uniqueTypes: ScheduleEventType[] = Array.from(
    new Set(events.map((e) => e.type.name as ScheduleEventType)),
  );
  const colors: EventColor[] = uniqueTypes.map((type) => EVENTS_COLOR[type]);

  return (
    <>
      <div className="relative w-full h-full">
        <motion.div
          className="flex flex-col items-center justify-between border p-2 min-h-20 aspect-square hover:shadow-xl cursor-pointer"
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        >
          <span className="text-sm font-semibold">{day}</span>
          <div className="w-full flex flex-row flex-wrap items-center justify-center gap-0.5">
            {colors.map((c, k) => (
              <span
                key={k}
                className={`${c.bg} w-[22%] aspect-square rounded-[1px] inline-block`}
              ></span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isHover ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className={`absolute left-1/2 -translate-x-1/2 bottom-30 z-10 bg-black/90 text-white text-xs rounded px-3 py-2 pointer-events-none shadow-lg ${isHover ? "" : "hidden"}`}
        >
          {/* Conteúdo do popup */}
          {uniqueTypes.length > 0 ? (
            <ul>
              {uniqueTypes.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          ) : (
            <span>Sem eventos</span>
          )}
        </motion.div>
      </div>
    </>
  );
}
