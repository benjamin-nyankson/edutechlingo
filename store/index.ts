import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createLanguageSlice, LanguageSlice } from './slices/languageSlice';
import { createLessonSlice, LessonSlice } from './slices/lessonSlice';
import { createTranslationSlice, TranslationSlice } from './slices/translationSlice';

type AppState = LanguageSlice & LessonSlice & TranslationSlice;

export const useAppStore = create<AppState>()(
  persist(
    (set, get, api) => ({
      ...createLanguageSlice(set, get, api),
      ...createLessonSlice(set, get, api),
      ...createTranslationSlice(set, get, api),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);