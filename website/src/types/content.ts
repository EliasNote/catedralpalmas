export type NoticiaCategoria = "grande" | "normal";

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

// Exemplo de local com lista de eventos agendados
export interface Location {
  id: string;
  name: string;
  events: ScheduleEvent[];
}
