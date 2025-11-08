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
  const [isOpenPopUp, setIsOpenPopUp] = React.useState(false);

  const uniqueTypes: ScheduleEventType[] = Array.from(
    new Set(events.map((e) => e.type.name as ScheduleEventType)),
  );
  const colors: EventColor[] = uniqueTypes.map((type) => EVENTS_COLOR[type]);

  return (
    <>
      <div className="relative w-full h-full">
        <motion.div
          className="flex flex-col items-center justify-between border p-2 min-h-20 aspect-square hover:shadow-xl cursor-pointer"
          onClick={() => setIsOpenPopUp(true)}
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
        {isOpenPopUp && (
          <>
            <div
              className="fixed inset-0 z-100 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsOpenPopUp(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-200 bg-black/90 text-white text-xs rounded px-3 py-2 shadow-lg"
            >
              <button
                className="absolute top-1 right-2 text-white text-lg cursor-pointer"
                onClick={() => setIsOpenPopUp(false)}
              >
                ×
              </button>
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
          </>
        )}
      </div>
    </>
  );
}
