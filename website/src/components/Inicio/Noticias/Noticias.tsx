"use client";

import type { Noticia } from "@/types";
import NoticiaCard from "./NoticiaNormalCard";
import NoticiaGrandeCard from "./NoticiaGrandeCard";

interface NoticiasProps {
  noticias: Noticia[];
  className?: string;
}

export default function Noticias({ noticias, className = "" }: NoticiasProps) {
  const noticiasGrandes = noticias.filter((n) => n.categoria == "grande");

  return (
    <section className={`py-12 ${className} max-w-[1280px] w-full`}>
      <div className="mx-auto flex flex-col gap-4">
        <div className="text-center mb-12">
          <h2>Últimas Notícias</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das novidades e eventos da nossa comunidade
          </p>
        </div>

        <NoticiaGrandeCard noticias={noticiasGrandes} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {noticias.map(
            (noticia, index) =>
              noticia.categoria == "normal" && (
                <NoticiaCard key={index} noticia={noticia} />
              ),
          )}
        </div>
      </div>
    </section>
  );
}
