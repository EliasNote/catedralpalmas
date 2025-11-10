import { EVENTS_COLOR } from "@/constants";
import { EventWithRelations } from "@/types/supabase";
import { ScheduleEventType } from "@/types";
import React from "react";
import { FiClock, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

interface EventCardProps {
	eventType: ScheduleEventType;
	events: EventWithRelations[];
}

export default function EventCard({ eventType, events }: EventCardProps) {
	const [isExpanded, setIsExpanded] = React.useState(false);
	const color = EVENTS_COLOR[eventType];

	const groupedEvents = events.reduce((acc, event) => {
		const key = event.title || eventType;
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(event);
		return acc;
	}, {} as Record<string, EventWithRelations[]>);

	return (
		<div className="border rounded-lg overflow-hidden">
			{/* Header do card */}
			<div
				className={`${color.bg} px-2 sm:px-3 py-2 cursor-pointer flex items-center justify-between hover:brightness-110 transition-all`}
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
					<span
						className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white flex-shrink-0`}
					/>
					<span className="font-semibold text-white capitalize text-xs sm:text-sm truncate">
						{eventType}
					</span>
					<span className="text-white/80 text-xs whitespace-nowrap flex-shrink-0">
						({events.length})
					</span>
				</div>
				<span className="text-white text-lg sm:text-xl flex-shrink-0 ml-1">
					{isExpanded ? "−" : "+"}
				</span>
			</div>

			{/* Conteúdo expandido */}
			<motion.div
				initial={{ height: 0, opacity: 0, padding: 0 }}
				animate={{
					height: isExpanded ? "auto" : 0,
					opacity: isExpanded ? 1 : 0,
					paddingTop: isExpanded ? 12 : 0,
					paddingBottom: isExpanded ? 12 : 0,
					paddingLeft: isExpanded ? 12 : 0,
					paddingRight: isExpanded ? 12 : 0,
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				className="overflow-hidden bg-white"
			>
				<div className="space-y-3">
					{Object.entries(groupedEvents).map(([title, groupEvents], idx) => (
						<div
							key={idx}
							className={`${idx > 0 ? "pt-3 border-t border-gray-200" : ""}`}
						>
							{/* Título do grupo (se houver) */}
							{title !== eventType && (
								<h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
									{title}
								</h4>
							)}

							{/* Lista de eventos */}
							<div className="space-y-2">
								{groupEvents.map((event, eventIdx) => (
									<div
										key={event.id}
										className={`flex flex-col gap-1 text-xs sm:text-sm ${
											eventIdx > 0 ? "pt-2 border-t border-gray-100" : ""
										}`}
									>
										{/* Horário */}
										<div className="flex items-center gap-1 sm:gap-2 text-gray-700">
											<FiClock className="text-gray-500 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4" />
											<span className="font-medium">{event.time}</span>
										</div>

										{/* Local */}
										<div className="flex items-center gap-1 sm:gap-2 text-gray-600">
											<FiMapPin className="text-gray-500 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4" />
											<span className="break-words">{event.location.name}</span>
										</div>

										{/* Descrição (se houver) */}
										{event.descricao && (
											<p className="text-gray-600 pl-5 text-xs break-words">
												{event.descricao}
											</p>
										)}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</div>
	);
}
