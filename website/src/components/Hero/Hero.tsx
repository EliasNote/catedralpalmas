"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_IMAGES } from "@/constants";

export default function Hero() {
	return (
		<>
			<section className="relative flex w-full">
				<h1 className="absolute top-[calc(100vh/2)] left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none max-w-[90vw]">
					Catedral do Senhor Bom Jesus da Coluna
				</h1>
				{HERO_IMAGES.map(({ src, margin }, idx) => (
					<motion.div
						key={idx}
						className={`w-full lg:w-1/3 ${idx === 2 ? "hidden lg:block" : ""} ${
							idx === 0 ? "hidden sm:block" : ""
						}`}
						initial={{ marginTop: margin }}
						animate={{ marginTop: 0 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 50,
							delay: 0.5,
							duration: 2,
						}}
					>
						<Image
							src={src}
							alt="Brasão"
							width={640}
							height={1080}
							className="object-cover h-screen"
						/>
					</motion.div>
				))}
				<svg className="pointer-events-none absolute inset-0 w-full h-full z-2">
					<filter id="grain">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.9"
							numOctaves="4"
							result="noise"
						/>
						<feColorMatrix in="noise" type="saturate" values="0" />
						<feFlood floodColor="#000000" result="color" />
						<feComposite
							in="color"
							in2="noise"
							operator="in"
							result="colored"
						/>
					</filter>
					<rect width="100%" height="100%" filter="url(#grain)" opacity="0.6" />
				</svg>
			</section>
		</>
	);
}
