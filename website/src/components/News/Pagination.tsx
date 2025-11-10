"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	if (totalPages <= 1) return null;

	const getPageNumbers = () => {
		const pages: (number | string)[] = [];
		const maxVisible = 5;

		if (totalPages <= maxVisible) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			if (currentPage <= 3) {
				pages.push(1, 2, 3, 4, "...", totalPages);
			} else if (currentPage >= totalPages - 2) {
				pages.push(
					1,
					"...",
					totalPages - 3,
					totalPages - 2,
					totalPages - 1,
					totalPages
				);
			} else {
				pages.push(
					1,
					"...",
					currentPage - 1,
					currentPage,
					currentPage + 1,
					"...",
					totalPages
				);
			}
		}

		return pages;
	};

	return (
		<div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 sm:mt-12">
			{/* Botão anterior */}
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
				aria-label="Página anterior"
			>
				<FiChevronLeft size={20} />
			</button>

			{/* Números das páginas */}
			<div className="flex gap-1 sm:gap-2">
				{getPageNumbers().map((page, index) =>
					page === "..." ? (
						<span
							key={`ellipsis-${index}`}
							className="px-3 sm:px-4 py-2 text-gray-500 text-sm sm:text-base"
						>
							...
						</span>
					) : (
						<button
							key={page}
							onClick={() => onPageChange(page as number)}
							className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
								currentPage === page
									? "bg-blue-600 text-white"
									: "border border-gray-300 hover:bg-gray-100"
							}`}
						>
							{page}
						</button>
					)
				)}
			</div>

			{/* Botão próximo */}
			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
				aria-label="Próxima página"
			>
				<FiChevronRight size={20} />
			</button>
		</div>
	);
}
