import { ScheduleEventType } from "@/types/content";

export const EVENTS_COLOR: Record<
	ScheduleEventType,
	{ text: string; bg: string; border: string }
> = {
	missa: {
		text: "text-blue-600",
		bg: "bg-blue-500",
		border: "border-blue-400",
	},
	celebracao: {
		text: "text-green-600",
		bg: "bg-green-500",
		border: "border-green-400",
	},
	confissao: {
		text: "text-red-600",
		bg: "bg-red-500",
		border: "border-red-400",
	},
	novena: {
		text: "text-yellow-600",
		bg: "bg-yellow-500",
		border: "border-yellow-400",
	},
	evento: {
		text: "text-purple-600",
		bg: "bg-purple-500",
		border: "border-purple-400",
	},
	outro: {
		text: "text-gray-600",
		bg: "bg-gray-500",
		border: "border-gray-400",
	},
};
