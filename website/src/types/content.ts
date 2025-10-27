export interface Noticia {
	src: string;
	titulo: string;
	descricao: string;
}

export interface Evento {
	id: string;
	title: string;
	date: Date;
	time: string;
	location: string;
	image: string;
}

export interface Event {
	id: string;
	imageUrl: string;
	title: string;
	date: Date;
	hour: string;
	location: string;
}

export interface Location {
	id: string;
	name: string;
	schedules: Schedule[];
}

export interface Schedule {
	id: string;
	date: Date;
	hours: string[];
}
