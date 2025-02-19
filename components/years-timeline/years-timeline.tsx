import { MemoryType } from "@/lib/types";

export default function YearsTimeline({
  memories,
}: {
  memories: MemoryType[];
}) {
  const years = [2025, 2024, 2023, 2022, 2021, 2020];
  const currentYear = 2024;

  return (
    <div className="flex flex-col text-end">
      {years.map((year, index) => (
        <div key={year}>
          <p
            className={`font-caveat ${
              year === currentYear ? "text-3xl font-bold" : "text-base"
            }`}
          >
            {year}
          </p>
          {index !== years.length - 1 && (
            <p className="font-caveat text-2xl">-</p>
          )}
        </div>
      ))}
    </div>
  );
}
