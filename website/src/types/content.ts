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

export interface Noticia {
  src: string;
  titulo: string;
  descricao: string;
  categoria: NoticiaCategoria;
  data: Date;
}

export type ScheduleEventType =
  | "missa"
  | "celebracao"
  | "confissao"
  | "novena"
  | "evento"
  | "outro";

export interface ScheduleEvent {
  id: string;
  title?: string;
  date: Date;
  time: string;
  type: ScheduleEventType;
  location: string;
  imageUrl?: string;
  descricao?: string;
}

export interface Location {
  id: string;
  name: LocationName;
  events: ScheduleEvent[];
}

export interface EventColor {
  text: string;
  bg: string;
  border: string;
}
