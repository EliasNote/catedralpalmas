import { Schedule } from "@/types";
import { motion } from "framer-motion";

export default function HorarioCard({ horario }: { horario: Schedule }) {
	const dia = horario.date
		.toLocaleDateString("pt-BR", { weekday: "long" })
		.replace("-feira", "")
		.slice(0, 3)
		.toUpperCase();

	const diaNumero = horario.date.getDate().toString().padStart(2, "0");
	const mes = horario.date.getMonth().toString().padStart(2, "0");
	const ano = horario.date.getFullYear().toString().slice(2);

	const hoje = new Date();
	const isHoje =
		hoje.getDate() === horario.date.getDate() &&
		hoje.getMonth() === horario.date.getMonth() &&
		hoje.getFullYear() === horario.date.getFullYear();

	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			className={`flex flex-col gap-2 items-center w-[176px] h-full py-4 px-3 border rounded ${
				isHoje ? "bg-amber-100 border-amber-400" : "bg-gray-50 border-gray-300"
			}`}
		>
			<span id="dia" className="text-[15px] font-medium">
				{dia}
			</span>
			<span>{`${diaNumero}/${mes}/${ano}`}</span>
			{horario.hours.map((h, i) => (
				<span
					className={`border rounded w-full py-1.5 text-center ${
						isHoje ? "bg-amber-50 border-amber-400" : "border-gray-300"
					}`}
					key={i}
				>
					{h}
				</span>
			))}
		</motion.div>
	);
}
