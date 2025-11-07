import Calendar from "@/components/Calendar/Calendar";
import { FaRegCalendar } from "react-icons/fa";

export default function Calendario() {
  return (
    <section className="pt-30 flex flex-col gap-12 items-center px-2">
      <div>
        <div className="flex justify-center items-center gap-4">
          <FaRegCalendar size={64} color="black" />
          <h1 className="pt-2.5">Calendário</h1>
        </div>
        <p>Acompanhe todos os eventos, celebrações e atividades</p>
      </div>
      <Calendar />
    </section>
  );
}
