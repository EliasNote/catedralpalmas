"use client";

import React, { useState } from "react";
import DayCard from "./DayCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Calendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const lastDay = new Date(year, month + 1, 0).getDate();
  const daysMonth = [];
  let monthName = new Date(year, month).toLocaleString("pt-BR", {
    month: "long",
  });
  monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const firstDayWeek = new Date(year, month, 1).getDay();

  for (let i = 1; i <= lastDay; i++) {
    daysMonth.push(i);
  }

  function minusDate() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  function plusDate() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
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
    <div className="max-w-200 w-full">
      <div className="flex gap-5 items-center justify-between max-w-60 mb-5">
        <p className="font-bold text-[20px]">{`${monthName} ${year}`}</p>
        <div className="flex gap-1">
          <FiChevronLeft
            className="cursor-pointer hover:bg-gray-200 rounded"
            size={28}
            onClick={minusDate}
          />
          <FiChevronRight
            className="cursor-pointer hover:bg-gray-200 rounded"
            size={28}
            onClick={plusDate}
          />
        </div>
      </div>
      <div className="max-w-200 w-full mx-auto border rounded">
        <div className="grid grid-cols-7">
          {diasSemana.map((dia, index) => (
            <div
              key={index}
              className="text-center font-bold py-2 bg-amber-100"
            >
              {dia}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0.5 aspect-square w-full p-0.5">
          {Array.from({ length: firstDayWeek }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {daysMonth.map((d, k) => (
            <DayCard key={k} day={d} />
          ))}
        </div>
      </div>
    </div>
  );
}
