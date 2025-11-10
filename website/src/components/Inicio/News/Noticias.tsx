"use client";

import type { News } from "@/types";
import NoticiaGrandeCard from "./NoticiaGrandeCard";
import NoticiaCard from "@/components/News/NewsCard";

export default function Noticias({
  news = [],
  className = "",
}: {
  news?: News[];
  className?: string;
}) {
  const noticiasGrandes = news.filter((n) => n.category == "grande");

  return (
    <section className={`py-12 ${className} max-w-[1280px] w-full`}>
      <div className="mx-auto flex flex-col gap-4">
        <div className="text-center mb-12">
          <h2>Últimas Notícias</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das novidades e eventos da nossa comunidade
          </p>
        </div>

        <NoticiaGrandeCard news={noticiasGrandes} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {news.map(
            (news, index) =>
              news.category == "normal" && (
                <NoticiaCard key={index} news={news} />
              ),
          )}
        </div>
      </div>
    </section>
  );
}
