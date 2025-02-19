"use client";

import { useYearsStore } from "@/store/use-years-store";
import { motion } from "framer-motion";

export default function YearsTimeline() {
  const { years, currentYear } = useYearsStore();

  return (
    <div className="flex flex-col text-end">
      {years.map((year, index) => (
        <div key={year}>
          <motion.p
            className={`font-caveat ${
              year === currentYear ? "text-3xl font-bold" : "text-base"
            }`}
            animate={{
              scale: year === currentYear ? 1.1 : 1,
              opacity: year === currentYear ? 1 : 0.7,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {year}
          </motion.p>
          {index !== years.length - 1 && (
            <p className="font-caveat text-2xl">-</p>
          )}
        </div>
      ))}
    </div>
  );
}
