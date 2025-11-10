"use client";

import { motion } from "framer-motion";

interface FilterBarProps {
  selectedFilter: "todas" | "recentes" | "antigas";
  onFilterChange: (filter: "todas" | "recentes" | "antigas") => void;
}

export default function FilterBar({
  selectedFilter,
  onFilterChange,
}: FilterBarProps) {
  const filters: Array<{
    id: "todas" | "recentes" | "antigas";
    label: string;
  }> = [
    { id: "todas", label: "Todas" },
    { id: "recentes", label: "Recentes" },
    { id: "antigas", label: "Antigas" },
  ];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`cursor-pointer relative px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors text-md sm:text-base text-black hover:text-gray-900 hover:bg-gray-100`}
        >
          {selectedFilter === filter.id ? (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-gray-300 rounded-lg z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          ) : null}

          <span className="relative z-20">{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
