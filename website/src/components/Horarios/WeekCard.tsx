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
  const isSelected = selectedDate.getTime() === date.getTime();
  const dayName = `${day} ${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}`;

  return (
    <div
      className={`
        px-8 py-2 rounded m-1 cursor-pointer
        ${isSelected ? "bg-white" : "bg-gray-100 hover:bg-gray-200"}
      `}
      onClick={() => setSelectedDate(date)}
      style={{ display: "inline-block" }}
    >
      <div className="font-bold text-[15px] text-center">
        <span>{dayName}</span>
      </div>
    </div>
  );
}
