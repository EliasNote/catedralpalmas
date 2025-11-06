import React from "react";

export default function DayCard({ day }: { day: number }) {
  return (
    <div className="flex items-start justify-center border rounded">{day}</div>
  );
}
