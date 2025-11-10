import { EVENTS_COLOR } from "@/constants";
import { ScheduleEventType } from "@/types";
import { EventWithRelations } from "@/types/databasetypes";
import { FiClock } from "react-icons/fi";

export default function DayCard({ event }: { event: EventWithRelations }) {
	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const colors = EVENTS_COLOR[event.type.name as ScheduleEventType];

	return (
		<div
			className={`border flex flex-col gap-1.5 min-w-38 w-fit rounded-[12px] p-4 ${colors.border}`}
		>
			<div className="flex justify-between items-center w-full">
				<FiClock className={`text-[20px] ${colors.text}`} />
				<div className={`h-2.5 w-2.5 ${colors.bg} rounded-full`}></div>
			</div>
			<div>{event.time}</div>
			<div>{capitalizeFirstLetter(event.type.name)}</div>
		</div>
	);
}
