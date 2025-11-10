export interface Database {
	public: {
		Tables: {
			location: {
				Row: {
					id: string;
					name: string;
				};
				Insert: {
					id?: string;
					name: string;
				};
				Update: {
					id?: string;
					name?: string;
				};
			};
			type: {
				Row: {
					id: string;
					name: string;
				};
				Insert: {
					id?: string;
					name: string;
				};
				Update: {
					id?: string;
					name?: string;
				};
			};
			event: {
				Row: {
					id: string;
					title: string | null;
					date: string;
					time: string;
					type: string;
					location: string;
					image_url: string | null;
					descricao: string | null;
				};
				Insert: {
					id?: string;
					title?: string | null;
					date: string;
					time: string;
					type: string;
					location: string;
					image_url?: string | null;
					descricao?: string | null;
				};
				Update: {
					id?: string;
					title?: string | null;
					date?: string;
					time?: string;
					type?: string;
					location?: string;
					image_url?: string | null;
					descricao?: string | null;
				};
			};
			news: {
				Row: {
					id: string;
					slug: string;
					title: string;
					subtitle: string | null;
					summary: string;
					cover_image: string;
					content: string;
					images: string[];
					author: string | null;
					category: "grande" | "normal";
					tags: string[] | null;
					published_at: string;
					updated_at: string;
					featured: boolean;
					created_at: string;
				};
				Insert: {
					id?: string;
					slug: string;
					title: string;
					subtitle?: string | null;
					summary: string;
					cover_image: string;
					content: string;
					images?: string[];
					author?: string | null;
					category?: "grande" | "normal";
					tags?: string[] | null;
					published_at?: string;
					updated_at?: string;
					featured?: boolean;
					created_at?: string;
				};
				Update: {
					id?: string;
					slug?: string;
					title?: string;
					subtitle?: string | null;
					summary?: string;
					cover_image?: string;
					content?: string;
					images?: string[];
					author?: string | null;
					category?: "grande" | "normal";
					tags?: string[] | null;
					published_at?: string;
					updated_at?: string;
					featured?: boolean;
					created_at?: string;
				};
			};
		};
	};
}

// Re-export from content.ts for backward compatibility
export type { EventWithRelations } from "./content";
