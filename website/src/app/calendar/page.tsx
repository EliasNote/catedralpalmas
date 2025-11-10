"use client";

import Calendar from "@/components/Calendar/Calendar";
import { EVENTS_COLOR } from "@/constants";
import { EventService } from "@/services/eventService";
import { EventWithRelations } from "@/types/databasetypes";
import { useState, useEffect } from "react";
import { FaRegCalendar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Calendario() {
	const [month, setMonth] = useState(new Date().getMonth());
	const [year, setYear] = useState(new Date().getFullYear());
	const [events, setEvents] = useState<EventWithRelations[]>([]);
	const lastDay = new Date(year, month + 1, 0).getDate();
	const daysMonth = [];
	let monthName = new Date(year, month).toLocaleString("pt-BR", {
		month: "long",
	});
	monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
	const firstDayWeek = new Date(year, month, 1).getDay();

	for (let i = 1; i <= lastDay; i++) {
		daysMonth.push(i);
	}

	const diasSemana = [
		"Domingo",
		"Segunda",
		"Terça",
		"Quarta",
		"Quinta",
		"Sexta",
		"Sábado",
	];

	useEffect(() => {
		const fetchData = async () => {
			try {
				setEvents(await EventService.getEvents());
			} catch (error) {
				console.error("Erro ao carregar eventos:", error);
			}
		};

		fetchData();
	}, []);

	function minusDate() {
		if (month === 0) {
			setMonth(11);
			setYear(year - 1);
		} else {
			setMonth(month - 1);
		}
	}

	function plusDate() {
		if (month === 11) {
			setMonth(0);
			setYear(year + 1);
		} else {
			setMonth(month + 1);
		}
	}
	return (
		<section className="py-30 flex flex-col gap-12 items-center px-2">
			<div>
				<div className="flex justify-center items-center gap-4">
					<FaRegCalendar size={64} color="black" />
					<h1 className="pt-2.5">Calendário</h1>
				</div>
				<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
					Acompanhe todos os eventos, celebrações e atividades
				</p>
			</div>

			<div className="max-w-200 w-full flex flex-col gap-2">
				<div className="flex gap-5 items-center justify-between max-w-60">
					<p className="font-bold text-[20px]">{`${monthName} ${year}`}</p>
					<div className="flex gap-1">
						<FiChevronLeft
							className="cursor-pointer hover:bg-gray-200 rounded"
							size={28}
							onClick={minusDate}
						/>
						<FiChevronRight
							className="cursor-pointer hover:bg-gray-200 rounded"
							size={28}
							onClick={plusDate}
						/>
					</div>
				</div>
				<div className="flex flex-wrap flex-row w-full h-fit gap-2 text-sm sm:text-base">
					{Object.keys(EVENTS_COLOR).map((eventType, k) => {
						const colors = EVENTS_COLOR[eventType as keyof typeof EVENTS_COLOR];
						return (
							<div
								className="flex items-center gap-2 border rounded px-2 py-1"
								key={k}
							>
								<div
									className={`w-3 h-3 sm:w-4 sm:h-4 rounded-[2px] ${colors.bg}`}
								/>
								<p className="capitalize">{eventType}</p>
							</div>
						);
					})}
				</div>
				<Calendar
					diasSemana={diasSemana}
					firstDayWeek={firstDayWeek}
					daysMonth={daysMonth}
					events={events}
					monthName={monthName}
					month={month}
					year={year}
				/>
			</div>
		</section>
	);
}
