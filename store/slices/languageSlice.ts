import { StateCreator } from 'zustand';

export interface LanguageSlice {
  language: string | null;
  setLanguage: (language: string) => void;
}

export const createLanguageSlice: StateCreator<LanguageSlice, [], [], LanguageSlice> = (set) => ({
  language: null,
  setLanguage: (language) => set({ language }),
});
