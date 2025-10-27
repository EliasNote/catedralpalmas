import { Event } from "@/types";
import Image from "next/image";

export default function EventoCard({ event }: { event: Event }) {
	const classNameInfos = "text-sm text-wrap";
	const styleInfos = { color: "var(--text-muted)" };

	return (
		<div className="max-w-[415px] h-[320px] flex flex-col rounded-[5px] border bg-white shadow-sm overflow-hidden cursor-pointer">
			<div className="relative w-full flex-1 min-h-0">
				<Image
					src={event.imageUrl}
					alt={event.title}
					fill
					className="object-cover"
				/>
			</div>

			<div className="flex-none flex flex-col gap-[5px] p-[10px]">
				<div className="font-bold">{event.title}</div>
				<div className={classNameInfos} style={styleInfos}>
					{event.date.toLocaleDateString("pt-BR", {
						day: "2-digit",
						month: "long",
						year: "numeric",
					})}
				</div>
				<div className={classNameInfos} style={styleInfos}>
					{event.hour}
				</div>
				<div className={classNameInfos} style={styleInfos}>
					{event.location}
				</div>
			</div>
		</div>
	);
}
