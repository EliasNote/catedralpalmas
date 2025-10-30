"use client";

import type { Noticia } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NoticiaCard({ noticia }: { noticia: Noticia }) {
	const [hovered, setHovered] = useState(false);

	const formattedDate = noticia.data.toLocaleDateString("pt-BR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<div
			className="relative bg-white rounded-lg overflow-hidden group cursor-pointer h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{/* Imagem */}
			<div className="relative w-full h-48 overflow-hidden">
				<motion.div
					className="w-full h-full"
					animate={{ scale: hovered ? 1.05 : 1 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
				>
					<Image
						src={noticia.src}
						alt={noticia.titulo}
						fill
						className="object-cover"
					/>
				</motion.div>
			</div>

			{/* Conteúdo */}
			<div className="p-5 flex-1 flex flex-col">
				{/* Título */}
				<h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 transition-colors">
					{noticia.titulo}
				</h3>

				{/* Descrição */}
				<p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
					{noticia.descricao}
				</p>

				{/* Data */}
				<div className="flex items-center text-xs text-gray-500 mt-auto">
					<svg
						className="w-4 h-4 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					{formattedDate}
				</div>
			</div>
		</div>
	);
}
