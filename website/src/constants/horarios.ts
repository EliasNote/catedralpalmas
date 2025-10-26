import { Location } from "@/types";

export const LOCATIONS: Location[] = [
	{
		id: "catedral",
		name: "Catedral do Senhor Bom Jesus",
		schedules: [
			{
				id: "1",
				date: new Date(2025, 9, 24),
				hours: ["07:00", "09:30", "18:00"],
			},
			{ id: "2", date: new Date(2025, 9, 25), hours: ["08:00", "11:00"] },
			{
				id: "3",
				date: new Date(2025, 9, 26),
				hours: ["06:30", "10:00", "20:00"],
			},
			{
				id: "4",
				date: new Date(2025, 9, 27),
				hours: ["07:15", "12:00", "18:30"],
			},
			{
				id: "5",
				date: new Date(2025, 9, 28),
				hours: ["08:30", "15:00", "19:00"],
			},
			{
				id: "6",
				date: new Date(2025, 9, 29),
				hours: ["07:45", "13:00", "20:30"],
			},
			{
				id: "7",
				date: new Date(2025, 9, 30),
				hours: ["09:00", "16:00", "21:00"],
			},
		],
	},
	{
		id: "saojose",
		name: "Comunidade São José",
		schedules: [
			{ id: "1", date: new Date(2025, 9, 24), hours: ["08:00", "19:00"] },
			{ id: "2", date: new Date(2025, 9, 25), hours: ["09:00"] },
			{ id: "3", date: new Date(2025, 9, 26), hours: ["18:00"] },
		],
	},
	{
		id: "santacruz",
		name: "Comunidade Santa Cruz",
		schedules: [
			{ id: "1", date: new Date(2025, 9, 24), hours: ["10:00"] },
			{ id: "2", date: new Date(2025, 9, 27), hours: ["19:30"] },
		],
	},
	{
		id: "santana",
		name: "Comunidade Sant'Ana",
		schedules: [
			{ id: "1", date: new Date(2025, 9, 25), hours: ["07:30", "18:30"] },
			{ id: "2", date: new Date(2025, 9, 28), hours: ["20:00"] },
		],
	},
	{
		id: "sagradafamilia",
		name: "Comunidade Sagrada Família",
		schedules: [
			{ id: "1", date: new Date(2025, 9, 26), hours: ["09:00", "17:00"] },
			{ id: "2", date: new Date(2025, 9, 29), hours: ["19:00"] },
		],
	},
	{
		id: "saojoao",
		name: "Comunidade São João Batista",
		schedules: [
			{ id: "1", date: new Date(2025, 9, 27), hours: ["08:00"] },
			{ id: "2", date: new Date(2025, 9, 30), hours: ["18:00"] },
		],
	},
	{
		id: "santateresa",
		name: "Comunidade Santa Teresa",
		schedules: [
			{ id: "1", date: new Date(2025, 9, 28), hours: ["07:00", "19:00"] },
		],
	},
	{
		id: "saojoaquim",
		name: "Comunidade São Joaquim",
		schedules: [
			{ id: "1", date: new Date(2025, 9, 29), hours: ["08:30"] },
			{ id: "2", date: new Date(2025, 9, 30), hours: ["17:00"] },
		],
	},
];
