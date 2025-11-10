"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { News } from "@/types";
import { formatDate } from "@/config/locale";
import { useRouter } from "next/navigation";

export default function NewsCard({ news }: { news: News }) {
  const [hovered, setHovered] = useState(false);
  const formattedDate = formatDate(new Date(news.published_at));
  const router = useRouter();

  function openNews() {
    router.push(`/news/${news.slug}`);
  }

  return (
    <div
      className="relative bg-white rounded-lg overflow-hidden group cursor-pointer h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => openNews()}
    >
      {/* Imagem */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <motion.div
          className="w-full h-full"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={news.cover_image}
            alt={news.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Conteúdo */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        {/* Título */}
        <h3 className="text-base sm:text-lg text-gray-900 mb-2 line-clamp-2 font-semibold transition-colors">
          {news.title}
        </h3>

        {/* Descrição */}
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 flex-1">
          {news.summary}
        </p>

        {/* Data */}
        <div className="flex text-xs sm:text-sm items-center text-gray-500 mt-auto">
          <Image
            src="/calendar.svg"
            alt="Calendário"
            width={16}
            height={16}
            className="mr-2 flex-shrink-0"
          />
          {formattedDate}
        </div>
      </div>
    </div>
  );
}
