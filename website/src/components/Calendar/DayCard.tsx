import { EVENTS_COLOR } from "@/constants";
import { EventColor, ScheduleEventType } from "@/types";
import { EventWithRelations } from "@/types/supabase";
import { motion } from "framer-motion";
import React from "react";
import EventCard from "./EventCard";

export default function DayCard({
  day,
  monthName,
  events,
}: {
  day: number;
  monthName: string;
  events: EventWithRelations[];
}) {
  const [isOpenPopUp, setIsOpenPopUp] = React.useState(false);

  const uniqueTypes: ScheduleEventType[] = Array.from(
    new Set(events.map((e) => e.type.name as ScheduleEventType)),
  );
  const colors: EventColor[] = uniqueTypes.map((type) => EVENTS_COLOR[type]);

  // Agrupa eventos por tipo
  const eventsByType = events.reduce(
    (acc, event) => {
      const type = event.type.name as ScheduleEventType;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(event);
      return acc;
    },
    {} as Record<ScheduleEventType, EventWithRelations[]>,
  );

  return (
    <>
      <div className="relative w-full h-full">
        <motion.div
          className="flex flex-col items-center justify-between border p-1 sm:p-2 sm:min-h-20 aspect-square hover:shadow-xl cursor-pointer"
          onClick={() => setIsOpenPopUp(true)}
        >
          <span className="text-xs sm:text-sm font-semibold">{day}</span>
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
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 max-w-[95vw] md:max-w-[500px] w-full -translate-y-1/2 z-200 bg-gray-50 text-black rounded-lg shadow-2xl max-h-[85vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b px-3 sm:px-4 py-2 sm:py-3 flex flex-col flex-shrink-0">
                <div className="flex flex-row w-full justify-between items-start">
                  <h3 className="text-lg sm:text-xl font-bold m-0 pr-2 break-words">
                    {`${day} de ${monthName}`}
                  </h3>
                  <button
                    className="text-gray-400 hover:text-gray-600 text-2xl sm:text-3xl cursor-pointer flex-shrink-0 leading-none"
                    onClick={() => setIsOpenPopUp(false)}
                    aria-label="Fechar"
                  >
                    ×
                  </button>
                </div>
                <span className="text-gray-600 text-xs sm:text-sm">
                  {events.length} {events.length === 1 ? "evento" : "eventos"}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4">
                {events.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    {uniqueTypes.map((type) => (
                      <EventCard
                        key={type}
                        eventType={type}
                        events={eventsByType[type]}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-8 text-sm">
                    Sem eventos neste dia
                  </p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}
