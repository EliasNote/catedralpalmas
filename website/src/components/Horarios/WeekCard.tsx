import { motion } from "framer-motion";

export default function WeekCard({
  selectedWeekDay,
  n,
  k,
  setSelectedWeekDay,
}: {
  selectedWeekDay: number;
  n: string;
  k: number;
  setSelectedWeekDay: (dayIndex: number) => void;
}) {
  const isSelected = selectedWeekDay === k;

  return (
    <motion.div
      key={k}
      className={`
        px-8 py-2 rounded m-1 cursor-pointer
        ${isSelected ? "bg-white text-blue-500 font-bold" : "bg-gray-100 hover:bg-gray-200"}
      `}
      onClick={() => setSelectedWeekDay(k)}
      style={{ display: "inline-block" }}
      layout
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      whileHover={{ scale: 1.03 }}
      animate={
        isSelected
          ? { scale: 1.07, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }
          : { scale: 1, boxShadow: "0 0px 0px rgba(0,0,0,0)" }
      }
    >
      {n}
    </motion.div>
  );
}
