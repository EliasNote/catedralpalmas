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

	return (
		<section>
			<div className="relative flex w-full h-fit">
				<>
					{images.map(({ src, margin }, idx) => (
						<motion.div
							key={idx}
							className="w-1/3 h-screen"
							initial={{
								marginTop: margin,
							}}
							animate={{
								marginTop: 0,
							}}
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
								className="object-cover h-full w"
							/>
						</motion.div>
					))}
				</>
				{/* Noise overlay SVG */}
				<svg className="pointer-events-none absolute inset-0 w-full h-full z-10">
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
