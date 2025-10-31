"use client";

import type { Noticia } from "@/types";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import NewsButton from "./NewsButton";

export default function NoticiaGrandeCard({
  noticias,
}: {
  noticias: Noticia[];
}) {
  const [hovered, setHovered] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const noticia = noticias[activeIndex];

  function prev() {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? noticias.length - 1 : prev - 1));
  }
  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));
  }, [noticias.length]);

  useEffect(() => {
    if (hovered || noticias.length <= 1) return;

    const interval = setInterval(next, 5000);

    return () => clearInterval(interval);
  }, [hovered, noticias.length, next]);

  const formattedDate = noticia.data.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const slideVariants = {
    enter: (dir: 1 | -1) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 1.02,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: 1 | -1) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden h-[600px] max-h-[600px] w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagem */}
      <motion.div
        className="w-full h-full"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative w-full h-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute inset-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={noticia.src}
                alt={noticia.titulo}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="p-10 absolute inset-0 text-left max-w-[620px] flex flex-col gap-4">
        {/* Título */}
        <h3 className="text-lg text-white text-left mb-0">{noticia.titulo}</h3>

        {/* Descrição */}
        <p className="text-md text-white">{noticia.descricao}</p>

        {/* Data */}
        <div className="text-sm text-white flex items-center">
          <Image
            src="/calendar.svg"
            alt="Calendário"
            width={16}
            height={16}
            className="mr-2 invert"
          />
          {formattedDate}
        </div>

        <NewsButton />
      </div>

      {/* Slides Bottom */}
      {noticias.length > 1 && (
        <div className="absolute inset-0 flex justify-center items-end p-6 gap-1.5">
          {noticias.map((x, index) => (
            <motion.div
              animate={{ width: index === activeIndex ? 30 : 10 }}
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[10px] h-[10px] cursor-pointer ${index === activeIndex ? "bg-white" : "bg-white/50"} rounded-full`}
            />
          ))}
        </div>
      )}

      {/* Next and Prev Buttons */}
      <button className="absolute inset-0"></button>
      <button className="absolute inset-0"></button>
    </div>
  );
}
