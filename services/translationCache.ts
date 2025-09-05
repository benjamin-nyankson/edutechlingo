import AsyncStorage from "@react-native-async-storage/async-storage";

const TRANSLATION_KEY = "recent_translations";

// Save translation
export const saveTranslation = async (
  language: string,
  text: string,
  translation: string
) => {
  try {
    const stored = await AsyncStorage.getItem(TRANSLATION_KEY);
    const translations = stored ? JSON.parse(stored) : [];

    // Add new translation
    const newEntry = { language, text, translation, date: new Date().toISOString() };

    // Optionally keep only last 20 translations
    const updated = [newEntry, ...translations].slice(0, 20);

    await AsyncStorage.setItem(TRANSLATION_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Error saving translation:", error);
  }
};

// Get all cached translations
export const getTranslations = async () => {
  try {
    const stored = await AsyncStorage.getItem(TRANSLATION_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error fetching translations:", error);
    return [];
  }
};

// Find a specific cached translation
export const getCachedTranslation = async (language: string, text: string) => {
  try {
    const translations = await getTranslations();
    return translations.find(
      (t: any) => t.language === language && t.text === text
    );
  } catch (error) {
    console.error("Error checking cache:", error);
    return null;
  }
};
