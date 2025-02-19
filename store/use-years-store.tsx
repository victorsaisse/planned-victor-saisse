import { create } from "zustand";

interface YearsState {
  years: number[];
  currentYear: number | null;
  setYears: (years: number[]) => void;
  setCurrentYear: (year: number) => void;
}

export const useYearsStore = create<YearsState>((set) => ({
  years: [],
  currentYear: null,
  setYears: (years) => set({ years }),
  setCurrentYear: (year) => set({ currentYear: year }),
}));
