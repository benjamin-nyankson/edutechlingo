import { useEffect, useState } from "react";
import { getCachedTranslation, saveTranslation } from "./translationCache";
import usePost from "./usePost";

export const useTranslate = (language: string) => {
  const { data, postData } = usePost<any, { text: string }>("/api/translate");
  const [loading, setLoading] = useState(false);
  const [translation, setTranslation] = useState<string | null>(null);

  const translate = async (text: string) => {
    setLoading(true);

    // 1. Check cache
    const cached = await getCachedTranslation(language, text);
    if (cached) {
      setTranslation(cached.translation);
      setLoading(false);
      return;
    }

    // 2. Hit AI if not cached
    await postData({ text, language });

    if (data?.translation) {
      setTranslation(data.translation);

      // 3. Save to cache
      await saveTranslation(language, text, data.translation);
    }

    setLoading(false);
  };
  useEffect(() => {
    console.log("jjj", data);
     saveTranslation(language, "text", data?.translation);
  }, [data]);

  return { translation, translate, loading };
};
