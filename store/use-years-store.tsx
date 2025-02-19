import { create } from "zustand";

interface YearsState {
  currentYear: number | null;
  setCurrentYear: (year: number) => void;
}

export const useYearsStore = create<YearsState>((set) => ({
  currentYear: null,
  setCurrentYear: (year) => set({ currentYear: year }),
}));
