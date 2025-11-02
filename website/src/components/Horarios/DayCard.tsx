import { ScheduleEvent } from "@/types";
import { FiClock } from "react-icons/fi";

export default function DayCard({ event }: { event: ScheduleEvent }) {
  return (
    <div className="border flex flex-col items-center justify-center rounded p-4">
      <div>
        <FiClock className="text-2xl text-blue" />
      </div>
      <div>{event.time}</div>
      <div>{event.type}</div>
    </div>
  );
}
