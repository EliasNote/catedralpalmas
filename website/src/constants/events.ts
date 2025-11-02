import { ScheduleEvent } from "@/types/content";

export const EVENTS_COLOR: Record<
  ScheduleEvent["type"],
  { text: string; bg: string; border: string }
> = {
  missa: { text: "text-blue", bg: "bg-blue", border: "border-blue/50" },
  celebracao: {
    text: "text-green",
    bg: "bg-green",
    border: "border-green/50",
  },
  confissao: { text: "text-red", bg: "bg-red", border: "border-red/50" },
  novena: {
    text: "text-yellow",
    bg: "bg-yellow",
    border: "border-yellow/50",
  },
  evento: {
    text: "text-purple",
    bg: "bg-purple",
    border: "border-purple/50",
  },
  outro: { text: "text-gray", bg: "bg-gray", border: "border-gray/50" },
};
