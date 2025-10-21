"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
	const images = [
		{
			src: "/hero1.png",
			margin: "-100%",
		},
		{
			src: "/hero2.png",
			margin: "100%",
		},
		{
			src: "/hero3.png",
			margin: "-100%",
		},
	];

	const heigth = 1080;

	return (
		<section>
			<div className="relative flex w-full">
				{" "}
				{/* Removi h-screen */}
				{images.map(({ src, margin }, idx) => (
					<motion.div
						key={idx}
						className="w-1/3"
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
							className="object-cover w-full"
						/>
					</motion.div>
				))}
				<svg className="pointer-events-none absolute inset-0 w-full h-full z-2">
					<rect
						width="100%"
						height="100%"
						filter="url(#grain)"
						opacity="0.45"
					/>
				</svg>
			</div>
		</section>
	);
}
