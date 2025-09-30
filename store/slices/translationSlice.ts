import { StateCreator } from 'zustand';

export interface TranslationSlice {
  translations: { from: string; to: string; text: string }[];
  addTranslation: (translation: { from: string; to: string; text: string }) => void;
}

export const createTranslationSlice: StateCreator<TranslationSlice, [], [], TranslationSlice> = (set) => ({
  translations: [],
  addTranslation: (translation) =>
    set((state) => ({ translations: [translation, ...state.translations] })),
});
