import type { Noticia } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NoticiaCard({
	noticia,
	width,
	length,
}: {
	noticia: Noticia;
	width: number;
	length: number;
}) {
	const [hovered, setHovered] = useState(false);
	return (
		<div
			className="relative group"
			style={{ width: `${width}px`, height: `${length}px` }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="w-full h-full cursor-pointer overflow-hidden">
				<motion.div
					className="w-full h-full"
					initial={{ scale: 1 }}
					animate={{ scale: hovered ? 1.05 : 1 }}
					transition={{ duration: 0.4, ease: "easeOut" }}
				>
					<Image
						src={noticia.src}
						alt="Notícia 1"
						fill
						className="object-cover"
					/>
				</motion.div>
				<motion.div
					className="absolute inset-0 pointer-events-none"
					animate={{
						background: hovered
							? "linear-gradient(to top, rgba(0,0,0,0.93), transparent 80%)"
							: "linear-gradient(to top, rgba(0,0,0,0.8), transparent 80%)",
					}}
					transition={{ duration: 0.3 }}
				/>
				<h3 className="absolute left-0 right-0 bottom-5 text-center text-white text-[24px] px-2">
					{noticia.titulo}
				</h3>
			</div>
		</div>
	);
}
