"use client";

import { Noticia } from "@/types";
import { motion } from "framer-motion";
import NoticiaCard from "./NoticiaCard";

interface NoticiasListProps {
	noticias: Noticia[];
}

export default function NoticiasList({ noticias }: NoticiasListProps) {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	if (noticias.length === 0) {
		return (
			<div className="text-center py-16">
				<p className="text-xl text-gray-500">Nenhuma notícia encontrada.</p>
			</div>
		);
	}

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
		>
			{noticias.map((noticia, index) => (
				<motion.div key={index} variants={item}>
					<NoticiaCard noticia={noticia} />
				</motion.div>
			))}
		</motion.div>
	);
}
