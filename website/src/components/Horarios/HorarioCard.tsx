import { ScheduleEvent } from "@/types";
import { motion } from "framer-motion";

export default function HorarioCard({ eventos }: { eventos: ScheduleEvent[] }) {
  if (!eventos || eventos.length === 0) return null;

  const dia = eventos[0].date
    .toLocaleDateString("pt-BR", { weekday: "long" })
    .replace("-feira", "")
    .slice(0, 3)
    .toUpperCase();

  const diaNumero = eventos[0].date.getDate().toString().padStart(2, "0");
  const mes = (eventos[0].date.getMonth() + 1).toString().padStart(2, "0");
  const ano = eventos[0].date.getFullYear().toString().slice(2);

  const hoje = new Date();
  const isHoje =
    hoje.getDate() === eventos[0].date.getDate() &&
    hoje.getMonth() === eventos[0].date.getMonth() &&
    hoje.getFullYear() === eventos[0].date.getFullYear();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`flex flex-col gap-2 items-center w-[176px] h-full py-4 px-3 border rounded ${
        isHoje ? "bg-amber-100 border-amber-400" : "bg-gray-50 border-gray-300"
      }`}
      onClick={}
    >
      <span id="dia" className="text-[15px] font-medium">
        {dia}
      </span>
      <span>{`${diaNumero}/${mes}/${ano}`}</span>
      {eventos.map((ev, i) => (
        <span
          className={`border rounded w-full py-1.5 text-center flex flex-col ${
            isHoje ? "bg-amber-50 border-amber-400" : "border-gray-300"
          }`}
          key={ev.id}
        >
          <span className="font-semibold">{ev.time}</span>
          <span className="text-xs capitalize">
            {ev.type}
            {ev.title ? ` - ${ev.title}` : ""}
          </span>
        </span>
      ))}
    </motion.div>
  );
}
