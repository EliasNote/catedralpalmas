"use client";

import { LOCATIONS } from "@/constants";
import HorarioCard from "./HorarioCard";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

import { useEffect, useState, useMemo } from "react";

export default function Horarios({ className }: { className: string }) {
	const standardLocation = "catedral";

	const [selectedLocation, setSelectedLocation] = useState(standardLocation);

	const days = useMemo(
		() => ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
		[]
	);
	const [week, setWeek] = useState({
		DOM: null,
		SEG: null,
		TER: null,
		QUA: null,
		QUI: null,
		SEX: null,
		SÁB: null,
	});

	useEffect(() => {
		const location = LOCATIONS.find((x) => x.id === selectedLocation);
		const newWeek = {
			DOM: null,
			SEG: null,
			TER: null,
			QUA: null,
			QUI: null,
			SEX: null,
			SÁB: null,
		};

		if (location && location.schedules) {
			location.schedules.forEach((x, k) => {
				const key = days[x.date.getDay()];
				// @ts-expect-error: TypeScript does not allow string index for week, mas key sempre é válida.
				newWeek[key] = <HorarioCard key={k} horario={x} />;
			});
		}

		setWeek(newWeek);
	}, [selectedLocation, days]);

	return (
		<>
			<section className={`${className}`}>
				<h2>Celebrações da Semana</h2>
				<div className="w-full max-w-82 mb-2 mt-[-10px]">
					<Select value={selectedLocation} onValueChange={setSelectedLocation}>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Selecione uma comunidade" />
						</SelectTrigger>
						<SelectContent className="bg-white">
							{LOCATIONS.map((location) => (
								<SelectItem key={location.id} value={location.id}>
									{location.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="flex m-auto h-fit flex-wrap gap-2">
					{days.map((dia) => (
						<div key={dia} className="flex flex-1 flex-col items-center ">
							{/* @ts-expect-error: TypeScript does not allow string index for week, mas dia sempre é uma chave válida. */}
							{week[dia] ? (
								// @ts-expect-error: TypeScript does not allow string index for week, mas dia sempre é uma chave válida.
								week[dia]
							) : (
								<div className="flex flex-col gap-2 items-center w-42 h-full py-4 px-3 border rounded bg-gray-100 border-gray-200 opacity-50">
									<span className="text-[14px] font-medium text-gray-400">
										{dia}
									</span>
									<span className="text-gray-400 text-sm">Sem horário</span>
								</div>
							)}
						</div>
					))}
				</div>
			</section>
		</>
	);
}
