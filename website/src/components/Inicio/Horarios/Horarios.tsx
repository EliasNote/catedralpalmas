"use client";

import { EventService } from "@/services/eventService";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../ui/select";
import { useEffect, useState } from "react";
import WeekCard from "./WeekCard";
import DayCard from "./DayCard";
import { Location } from "@/types";
import { EventWithRelations } from "@/types/databasetypes";

export default function Horarios({ className }: { className: string }) {
	const [locations, setLocations] = useState<Location[]>([]);
	const [selectedLocation, setSelectedLocation] = useState<string>("Catedral");

	const [loading, setLoading] = useState(true);
	const [eventsOfDay, setEventsOfDay] = useState<EventWithRelations[] | null>(
		[]
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const events = await EventService.getEvents();
				const groupedLocations = EventService.groupEventsByLocation(events);
				setLocations(groupedLocations);
			} catch (error) {
				console.error("Erro ao carregar eventos:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const selectedLoc = locations.find(
		(location) => location.name === selectedLocation
	);

	const [week, setWeek] = useState<Record<string, Date>>({});
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	useEffect(() => {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		const weekDays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
		const weekMap: Record<string, Date> = {};

		weekDays.forEach((day, index) => {
			const date = new Date(today);
			date.setHours(0, 0, 0, 0);
			date.setDate(today.getDate() + index);
			weekMap[day] = date;
		});

		setWeek(weekMap);
		setSelectedDate(today);
	}, []);

	useEffect(() => {
		if (!selectedLoc || !selectedDate) {
			setEventsOfDay([]);
			return;
		}
		setEventsOfDay(
			selectedLoc.events.filter((ev) => {
				const evDate = new Date(ev.date);
				evDate.setHours(0, 0, 0, 0);
				const compareDate = new Date(selectedDate);
				compareDate.setHours(0, 0, 0, 0);
				return evDate.getTime() === compareDate.getTime();
			})
		);
	}, [selectedLoc, selectedDate]);

	return (
		<>
			<section className={`w-full max-w-[1280px] ${className}`}>
				<div className="text-center mb-12">
					<h2>Horários da Semana</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Fique por dentro das novidades e eventos da nossa comunidade
					</p>
				</div>
				<div className="w-full p-4 pt-8 border rounded">
					{loading || !selectedDate ? (
						<div className="flex justify-center items-center py-10">
							<p>Carregando horários...</p>
						</div>
					) : locations.length === 0 ? (
						<div className="flex justify-center items-center py-10">
							<div className="text-center">
								<p className="text-red-600 font-semibold">
									Nenhuma localização encontrada
								</p>
								<p className="text-sm text-gray-600 mt-2">
									Verifique se o arquivo .env.local está configurado
									corretamente
								</p>
								<p className="text-xs text-gray-500 mt-1">
									Abra o console (F12) para mais detalhes
								</p>
							</div>
						</div>
					) : (
						<div className="flex flex-col gap-2">
							<div className="w-full max-w-82 mt-[-10px]">
								<Select
									value={selectedLocation}
									onValueChange={(value) => setSelectedLocation(value)}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Selecione uma comunidade" />
									</SelectTrigger>
									<SelectContent className="bg-white">
										{locations.map((location) => (
											<SelectItem key={location.id} value={location.name}>
												{location.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-wrap w-full gap-0.5 lg:gap-2 justify-around bg-gray-100 rounded">
								{Object.entries(week).map(([day, date], k) => (
									<WeekCard
										key={k}
										n={[day, date]}
										selectedDate={selectedDate}
										setSelectedDate={setSelectedDate}
									/>
								))}
							</div>

							<div className="flex flex-wrap w-full gap-2 rounded">
								{eventsOfDay && eventsOfDay.length > 0 ? (
									eventsOfDay.map((event) => (
										<DayCard key={event.id} event={event} />
									))
								) : (
									<div className="w-full h-[114px] flex items-center justify-center">
										Nenhum evento encontrado
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
}
