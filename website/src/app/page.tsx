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

	const noticias = [
		{
			src: "/not2.png",
			titulo: "Celebração do Ano Jubilar na Catedral",
			descricao:
				"asodnasdn aosidnasdba isudaisdb iausbd aui sduasdbuaisdbasyudbaisudb uyasd",
		},
		{
			src: "/not3.png",
			titulo: "Celebração do Ano Jubilar na Catedral",
			descricao:
				"asodnasdn aosidnasdba isudaisdb iausbd aui sduasdbuaisdbasyudbaisudb uyasd",
		},
		{
			src: "/not4.png",
			titulo: "Celebração do Ano Jubilar na Catedral",
			descricao:
				"asodnasdn aosidnasdba isudaisdb iausbd aui sduasdbuaisdbasyudbaisudb uyasd",
		},
		{
			src: "/not5.png",
			titulo: "Celebração do Ano Jubilar na Catedral",
			descricao:
				"asodnasdn aosidnasdba isudaisdb iausbd aui sduasdbuaisdbasyudbaisudb uyasd",
		},
	];

	return (
		<section>
			<div className="relative flex w-full">
				<h1 className="absolute top-[calc(100vh/2)] left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-white text-[50px] text-center font-bold pointer-events-none max-w-[90vw]">
					Catedral do Senhor Bom Jesus da Coluna
				</h1>
				{images.map(({ src, margin }, idx) => (
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
			</div>
			<Image
				src={"/christ1.svg"}
				alt="Brasão"
				width={1920}
				height={422}
				className="my-[40px] h-[422px]"
			/>
			<div className="font-big-shoulders">
				<h2 className="text-center text-[42px]">Notícias</h2>
				<div className="flex max-w-[1280px] w-full gap-[20px] m-auto">
					<div className="relative w-[600px] h-[600px]">
						<Image
							src="/not2.png"
							alt="Notícia 1"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-transparent" />
						<h3 className="absolute left-0 right-0 bottom-14 text-center text-white text-[24px]">
							Celebração do Ano Jubilar na Catedral
						</h3>
					</div>
					<div className="flex flex-col gap-[20px]">
						<div className="relative w-[600px] h-[290px]">
							<Image
								src={"/not3.png"}
								alt="Notícia 2"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-transparent" />
							<h3 className="absolute left-0 right-0 bottom-14 text-center text-white text-[22px]">
								Celebração do Ano Jubilar na Catedral
							</h3>
						</div>
						<div className="flex gap-[20px]">
							<Image
								src={"/not4.png"}
								alt="Brasão"
								width={320}
								height={290}
								className="max-w-[320px] max-h-[290px] object-cover"
							/>
							<Image
								src={"/not5.png"}
								alt="Brasão"
								width={320}
								height={290}
								className="max-w-[320px] max-h-[290px] object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
			<Image
				src={"/christ2.svg"}
				alt="Brasão"
				width={1920}
				height={664}
				className="my-[40px] h-[664px]"
			/>
		</section>
	);
}
