"use client";

import type { Noticia } from "@/types";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import NewsButton from "./NewsButton";
import { formatDate } from "@/config/locale";

export default function NoticiaGrandeCard({
	noticias,
}: {
	noticias: Noticia[];
}) {
	const [hovered, setHovered] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState<1 | -1>(1);
	const [dragging, setDragging] = useState(false); // Estado para saber se está arrastando
	const noticia = noticias[activeIndex];

	const prev = () => {
		setDirection(-1);
		setActiveIndex((prev) => (prev === 0 ? noticias.length - 1 : prev - 1));
	};

	const next = useCallback(() => {
		setDirection(1);
		setActiveIndex((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));
	}, [noticias.length]);

	useEffect(() => {
		if (hovered || noticias.length <= 1) return;

		const interval = setInterval(next, 5000);
		return () => clearInterval(interval);
	}, [hovered, noticias.length, next]);

	const formattedDate = formatDate(noticia.data);

	const slideVariants = {
		enter: (dir: 1 | -1) => ({
			x: dir > 0 ? 50 : -50,
			opacity: 0,
			scale: 1.02,
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
		},
		exit: (dir: 1 | -1) => ({
			x: dir > 0 ? -50 : 50,
			opacity: 0,
			scale: 0.98,
		}),
	};

	return (
		<div
			className="relative rounded-lg overflow-hidden h-[600px] max-h-[600px] w-full"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{/* Imagem com drag (apenas mobile) */}
			<motion.div
				className="w-full h-full md:pointer-events-none"
				animate={{ scale: hovered ? 1.05 : 1 }}
				transition={{ duration: 0.3, ease: "easeOut" }}
				drag="x"
				dragConstraints={{ left: 0, right: 0 }}
				dragElastic={0.1}
				onDragStart={() => setDragging(true)}
				onDragEnd={(e, info) => {
					setDragging(false);
					if (info.offset.x < -100) next();
					else if (info.offset.x > 100) prev();
				}}
				style={{ touchAction: "pan-y" }}
			>
				<div className="relative w-full h-full">
					<AnimatePresence initial={false} custom={direction} mode="wait">
						<motion.div
							key={activeIndex}
							className="absolute inset-0"
							custom={direction}
							variants={slideVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{ duration: 0.5, ease: "easeOut" }}
						>
							<Image
								src={noticia.src}
								alt={noticia.titulo}
								fill
								className="object-cover"
								priority
							/>
						</motion.div>
					</AnimatePresence>
				</div>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none md:pointer-events-auto" />
			</motion.div>

			{/* Conteúdo sobreposto */}
			<div className="p-10 absolute bottom-0 text-left max-w-[620px] flex flex-col gap-4 z-10 pointer-events-none">
				<h3 className="text-lg text-white text-left mb-0">{noticia.titulo}</h3>
				<p className="text-md text-white">{noticia.descricao}</p>
				<div className="text-sm text-white flex items-center">
					<Image
						src="/calendar.svg"
						alt="Calendário"
						width={16}
						height={16}
						className="mr-2 invert"
					/>
					{formattedDate}
				</div>
				<div className="pointer-events-auto">
					<NewsButton />
				</div>
			</div>

			{/* Slides Bottom */}
			{noticias.length > 1 && (
				<div className="absolute inset-0 flex justify-center items-end p-6 gap-1.5 z-20 pointer-events-none">
					{noticias.map((x, index) => (
						<motion.div
							animate={{ width: index === activeIndex ? 30 : 10 }}
							key={index}
							onClick={() => {
								if (index !== activeIndex) {
									setDirection(index > activeIndex ? 1 : -1);
									setActiveIndex(index);
								}
							}}
							className={`w-[10px] h-[10px] cursor-pointer ${
								index === activeIndex ? "bg-white" : "bg-white/50"
							} rounded-full pointer-events-auto`}
						/>
					))}
				</div>
			)}

			{/* Next and Prev Buttons */}
			{hovered && (
				<div className="hidden md:block absolute inset-0 pointer-events-none z-30">
					<button
						className="absolute cursor-pointer rounded-full bg-white/40 hover:bg-white/50 w-14 h-14 top-[calc(50%-25px)] left-4 flex items-center justify-center pointer-events-auto"
						onClick={prev}
					>
						<Image
							src="/arrow-button.svg"
							alt="Seta Esquerda"
							width={40}
							height={40}
							className="invert"
						/>
					</button>
					<button
						className="absolute cursor-pointer rounded-full bg-white/40 hover:bg-white/50 w-14 h-14 top-[calc(50%-25px)] right-4 flex items-center justify-center pointer-events-auto"
						onClick={next}
					>
						<Image
							src="/arrow-button.svg"
							alt="Seta Direita"
							width={40}
							height={40}
							className="invert -scale-x-100"
						/>
					</button>
				</div>
			)}
		</div>
	);
}
