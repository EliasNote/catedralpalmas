"use client";

import { useState, useMemo } from "react";
import { FaNewspaper } from "react-icons/fa";
import { noticiasData } from "@/constants";
import { NoticiasList, FilterBar, Pagination } from "@/components/Noticias";

export default function Noticias() {
  const [selectedFilter, setSelectedFilter] = useState<
    "todas" | "recentes" | "antigas"
  >("todas");
  const [currentPage, setCurrentPage] = useState(1);
  const noticiasPerPage = 12;

  // Filtrar e ordenar notícias
  const filteredNoticias = useMemo(() => {
    const filtered = [...noticiasData];

    // Aplicar filtro de data
    if (selectedFilter === "recentes") {
      filtered.sort((a, b) => b.data.getTime() - a.data.getTime());
    } else if (selectedFilter === "antigas") {
      filtered.sort((a, b) => a.data.getTime() - b.data.getTime());
    } else {
      // "todas" - ordenar por data mais recente
      filtered.sort((a, b) => b.data.getTime() - a.data.getTime());
    }

    return filtered;
  }, [selectedFilter]);

  // Paginação
  const totalPages = Math.ceil(filteredNoticias.length / noticiasPerPage);
  const indexOfLastNoticia = currentPage * noticiasPerPage;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPerPage;
  const currentNoticias = filteredNoticias.slice(
    indexOfFirstNoticia,
    indexOfLastNoticia,
  );

  const handleFilterChange = (filter: "todas" | "recentes" | "antigas") => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4">
          <FaNewspaper size={64} />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Notícias
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Fique por dentro das novidades, eventos e atividades da nossa
          comunidade paroquial
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-6 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
        <FilterBar
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Contador de resultados */}
      <div className="mb-6 text-sm sm:text-base text-gray-600">
        {filteredNoticias.length === 0
          ? "Nenhum resultado encontrado"
          : `${filteredNoticias.length} ${
              filteredNoticias.length === 1
                ? "notícia encontrada"
                : "notícias encontradas"
            }`}
      </div>

      {/* Lista de notícias */}
      <NoticiasList noticias={currentNoticias} />

      {/* Paginação */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
