"use client";

import { EVENTS } from "@/constants/events";
import EventoCard from "./EventoCard";
import { motion, Variants } from "framer-motion";

// 	id: string;
// 	title: string;
// 	date: Date;
// 	time: string;
// 	location: string;
// 	image: string;
// };

// {
//     id: 5,
//     title: "Encontro da Pastoral Jovem",
//     date: "12 de Novembro, 2025",
//     time: "19:00",
//     location: "Salão Paroquial",
//     capacity: "50 pessoas",
//     image:
//     "https://images.unsplash.com/photo-1662151855613-f2ff53199385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB5b3V0aHxlbnwxfHx8fDE3NjEyMzA2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     category: "Pastoral",
// }

export default function Eventos({ className }: { className: string }) {
	const container: Variants = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1,
			},
		},
	};

	const item: Variants = {
		hidden: { opacity: 0, x: 48 },
		show: {
			opacity: 1,
			x: 0,
			transition: { type: "spring", stiffness: 260, damping: 28, mass: 0.6 },
		},
	};

	return (
		<section className={`w-full  max-w-[1280px] ${className}`}>
			<h2>Próximos Eventos</h2>
			<motion.div
				className="w-full flex flex-row flex-wrap justify-center gap-2"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				{EVENTS.map((e, k) => (
					<motion.div
						key={k}
						variants={item}
						whileHover={{ scale: 1.02 }}
						className="flex-1 min-w-[250px]"
					>
						<EventoCard event={e} />
					</motion.div>
				))}
				{/* <motion.div
					variants={item}
					whileHover={{ scale: 1.02 }}
					className="flex-1 min-w-[250px]"
				>
					<EventoCard />
				</motion.div>
				<motion.div
					variants={item}
					whileHover={{ scale: 1.02 }}
					className="flex-1 min-w-[250px]"
				>
					<EventoCard />
				</motion.div>
				<motion.div
					variants={item}
					whileHover={{ scale: 1.02 }}
					className="flex-1 min-w-[250px]"
				>
					<EventoCard />
				</motion.div> */}
			</motion.div>
		</section>
	);
}
