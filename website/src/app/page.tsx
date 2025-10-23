"use client";

import Image from "next/image";
import { Hero, Noticias, Eventos } from "@/components";
import { noticiasData } from "@/constants";

export default function Home() {
	return (
		<section>
			<Hero />
			<Image
				src={"/christ1.svg"}
				alt="Brasão"
				width={1920}
				height={422}
				className="my-[40px] h-[422px]"
			/>
			<Noticias noticias={noticiasData} />
			<Image
				src={"/christ2.svg"}
				alt="Brasão"
				width={1920}
				height={664}
				className="my-[40px] h-[664px]"
			/>
			<Eventos />
			<Image
				src={"/christ3.svg"}
				alt="Brasão"
				width={1920}
				height={870}
				className="my-[40px] h-[870px]"
			/>
		</section>
	);
}
