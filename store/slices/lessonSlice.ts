import { StateCreator } from 'zustand';

export interface LessonSlice {
  lessons: string[];
  addLesson: (lesson: string) => void;
}

export const createLessonSlice: StateCreator<LessonSlice, [], [], LessonSlice> = (set) => ({
  lessons: [],
  addLesson: (lesson) => set((state) => ({ lessons: [...state.lessons, lesson] })),
});
