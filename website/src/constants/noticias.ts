import type { Noticia } from "@/types";

export const noticiasData: Noticia[] = [
	{
		src: "/not1.png",
		titulo: "Grande Celebração na Catedral",
		descricao:
			"Celebração especial com a comunidade reunida para um momento de fé e gratidão. Evento de destaque com participação de diversos grupos.",
		categoria: "grande",
		data: new Date(2025, 9, 18), // 18 de outubro
	},
	{
		src: "/not2.png",
		titulo: "Celebração da Festa de São Francisco",
		descricao:
			"A comunidade se reuniu em grande número para celebrar a festa do padroeiro com missa solene e procissão.",
		categoria: "normal",
		data: new Date(2025, 9, 18), // 18 de outubro
	},
	{
		src: "/not3.png",
		titulo: "Nova Iluminação Destaca Arquitetura Gótica",
		descricao:
			"Sistema de iluminação moderna foi instalado para realçar a beleza arquitetônica e os detalhes históricos da catedral.",
		categoria: "normal",
		data: new Date(2025, 9, 10), // 10 de outubro
	},
	{
		src: "/not4.png",
		titulo: "Coral Apresenta Repertório de Natal",
		descricao:
			"O coral da catedral inicia ensaios para as apresentações especiais de Natal que acontecerão em dezembro.",
		categoria: "normal",
		data: new Date(2025, 9, 5), // 5 de outubro
	},
	{
		src: "/not5.png",
		titulo: "Campanha Solidária Arrecada Alimentos",
		descricao:
			"A ação social da paróquia conseguiu arrecadar mais de 2 toneladas de alimentos para famílias carentes da região.",
		categoria: "normal",
		data: new Date(2025, 8, 28), // 28 de setembro
	},
];
