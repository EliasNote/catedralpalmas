"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Noticias from "@/components/Noticias";
import Eventos from "@/components/Eventos";
import Hero from "@/components/Hero";

export type Noticia = {
	src: string;
	titulo: string;
	descricao: string;
};

export default function Home() {
	const noticias: Noticia[] = [
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
			titulo:
				"Celebração do Ano Jubilar na Catedral asdinas asdn oaisdb iuasbdyasbdyasdu",
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
			<Hero />
			<Image
				src={"/christ1.svg"}
				alt="Brasão"
				width={1920}
				height={422}
				className="my-[40px] h-[422px]"
			/>
			<Noticias noticias={noticias} />
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
