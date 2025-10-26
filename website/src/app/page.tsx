"use client";

import Image from "next/image";
import { Hero, Noticias, Eventos, Horarios, Footer } from "@/components";
import { noticiasData } from "@/constants";

export default function Home() {
	return (
		<section className="flex flex-col gap-[60px]">
			<Hero />
			<Image
				src={"/christ1.svg"}
				alt="Brasão"
				width={1920}
				height={422}
				className=" h-[422px]"
			/>
			<Noticias noticias={noticiasData} />
			<Image
				src={"/christ2.svg"}
				alt="Brasão"
				width={1920}
				height={664}
				className=" h-[664px]"
			/>
			<Eventos />
			<Horarios />
			<Image
				src={"/christ3.svg"}
				alt="Brasão"
				width={1920}
				height={870}
				className=" h-[870px]"
			/>
			<Footer />
		</section>
	);
}
