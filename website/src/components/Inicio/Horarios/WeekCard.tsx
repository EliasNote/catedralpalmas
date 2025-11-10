import { motion } from "framer-motion";

export default function WeekCard({
  selectedDate,
  n,
  setSelectedDate,
}: {
  selectedDate: Date;
  n: [string, Date];
  setSelectedDate: (dayIndex: Date) => void;
}) {
  const [day, date] = n;
  const dayName = `${day} ${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}`;
  const isSelected = selectedDate.getTime() === date.getTime();

  return (
    <button
      className={`
        relative rounded m-1 cursor-pointer px-4 py-2 font-semibold text-[15px]
        transition-colors duration-200 hover:bg-gray-200
      `}
      onClick={() => setSelectedDate(date)}
      style={{ display: "inline-block" }}
    >
      {isSelected ? (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 rounded-sm z-10 bg-gray-300"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      ) : null}
      <span className="relative z-20">{dayName}</span>
    </button>
  );
}
