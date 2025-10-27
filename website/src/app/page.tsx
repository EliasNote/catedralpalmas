"use client";

import Image from "next/image";
import { Hero, Noticias, Eventos, Horarios, Footer } from "@/components";
import { noticiasData } from "@/constants";

export default function Home() {
	return (
		<section className="flex flex-col gap-[60px] items-center">
			<Hero />
			<Image
				src={"/christ1.svg"}
				alt="Brasão"
				width={1920}
				height={422}
				className=" h-[422px]"
			/>
			<Noticias noticias={noticiasData} className={"mx-2"} />
			<Image
				src={"/christ2.svg"}
				alt="Brasão"
				width={1920}
				height={664}
				className=" h-[664px]"
			/>
			<Eventos className={"mx-2"} />
			<Horarios className={"mx-2"} />
			<Image
				src={"/christ3.png"}
				alt="Brasão"
				width={1920}
				height={1080}
				quality={100}
				className=" w-[1920px] m-auto"
			/>
			<Footer />
		</section>
	);
}
