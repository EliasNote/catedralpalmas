export type NoticiaCategoria = "grande" | "normal";
export type LocationName =
	| "Catedral"
	| "São Jose"
	| "Santa Cruz"
	| "Santana"
	| "Sagrada Família"
	| "São Joao"
	| "Santa Teresa"
	| "São Joaquim";

export interface News {
	id: string;
	slug: string;
	title: string;
	subtitle?: string | null;
	summary: string;
	cover_image: string;
	content: string; // Markdown
	images: string[];
	author?: string | null;
	category: NoticiaCategoria;
	tags?: string[] | null;
	published_at: string;
	updated_at: string;
	featured: boolean;
	created_at: string;
}

export type ScheduleEventType =
	| "missa"
	| "celebracao"
	| "confissao"
	| "novena"
	| "evento"
	| "outro";

export interface EventWithRelations {
	id: string;
	title: string | null;
	date: string;
	time: string;
	type: {
		id: string;
		name: string;
	};
	location: {
		id: string;
		name: string;
	};
	descricao: string | null;
}

export interface Location {
	id: string;
	name: LocationName;
	events: EventWithRelations[];
}

export interface EventColor {
	text: string;
	bg: string;
	border: string;
}

// Tipos para Next.js App Router (dynamic routes)
export interface PageParams {
	slug: string;
}

export interface NewsPageProps {
	params: Promise<PageParams>;
}
