"use client";

import type { Noticia } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NoticiaGrandeCard({
	noticias,
}: {
	noticias: Noticia[];
}) {
	const [hovered, setHovered] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const noticia = noticias[activeIndex];

	function prev() {
		setActiveIndex((prev) => (prev === 0 ? noticias.length - 1 : prev - 1));
	}
	function next() {
		setActiveIndex((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));
	}

	const formattedDate = noticia.data.toLocaleDateString("pt-BR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<div
			className="relative rounded-lg overflow-hidden cursor-pointer h-[600px] max-h-[600px] w-full"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{/* Imagem */}
			<div>
				<Image
					src={noticia.src}
					alt={noticia.titulo}
					fill
					className="object-cover"
				/>
			</div>

			<div className="p-10 absolute bottom-0 left-0 text-left max-w-[620px] flex flex-col gap-4">
				{/* Título */}
				<h3 className="text-lg text-white text-left mb-0">{noticia.titulo}</h3>

				{/* Descrição */}
				<p className="text-sm text-white">{noticia.descricao}</p>

				{/* Data */}
				<div className="text-xs text-white flex">
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
				<button className="bg-amber-500 px-6 py-2 w-fit rounded text-white">
					Ler Notícia Completa
				</button>
			</div>
		</div>
	);
}
