"use client";

import React, { useState } from "react";
import DayCard from "./DayCard";

export default function Calendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const lastDay = new Date(year, month + 1, 0).getDate();
  const daysMonth = [];
  const firstDayWeek = new Date(year, month, 1).getDay();

  for (let i = 1; i <= lastDay; i++) {
    daysMonth.push(i);
  }

  const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  return (
    <div className="max-w-200 w-full mx-auto">
      <div className="grid grid-cols-7">
        {diasSemana.map((dia, index) => (
          <div key={index} className="text-center font-bold py-2">
            {dia}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 aspect-square w-full">
        {Array.from({ length: firstDayWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {daysMonth.map((d, k) => (
          <DayCard key={k} day={d} />
        ))}
      </div>
    </div>
  );
}
