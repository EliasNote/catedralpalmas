"use client";

import type { Noticia } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import NewsButton from "./NewsButton";

export default function NoticiaGrandeCard({
  noticias,
}: {
  noticias: Noticia[];
}) {
  const [hovered, setHovered] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const noticia = noticias[activeIndex];

  function prev() {
    setActiveIndex((prev) => (prev === 0 ? noticias.length - 1 : prev - 1));
  }
  function next() {
    setActiveIndex((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));
  }

  const formattedDate = noticia.data.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="relative rounded-lg overflow-hidden h-[600px] max-h-[600px] w-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagem */}
      <motion.div
        className="w-full h-full"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Image
          src={noticia.src}
          alt={noticia.titulo}
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="p-10 absolute bottom-0 left-0 text-left max-w-[620px] flex flex-col gap-4">
        {/* Título */}
        <h3 className="text-lg text-white text-left mb-0">{noticia.titulo}</h3>

        {/* Descrição */}
        <p className="text-sm text-white">{noticia.descricao}</p>

        {/* Data */}

        <div className="text-xs text-white flex items-center">
          <Image
            src="/calendar.svg"
            alt="Calendário"
            width={16}
            height={16}
            className="mr-2 invert"
          />
          {formattedDate}
        </div>

        <NewsButton hovered={hovered} />
      </div>
    </div>
  );
}
