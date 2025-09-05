import { RecentTranslations } from "@/components/RecentTranslations";
import { languages, local_storage_keys } from "@/constants/constants";
import AppLayout from "@/layouts/AppLayout";
import usePost from "@/services/usePost";
import { Button } from "@/shared/components/Button";
import { Select } from "@/shared/components/Select";
import Header from "@/shared/Header";
import { Textarea } from "@/shared/Texarea";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Translate() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || ""
  );

  const [text, setText] = useState("");
  const [count, setcount] = useState(0);

  const { postData, data, loading, setData } = usePost<
    { translation: string },
    object
  >("/api/translate");

  // const { translation, translate, loading:isLoading } = useTranslate(language)

  const handlePost = async () => {
    const stored_translations = localStorage.getItem(local_storage_keys.recent);
    const recent_translations: {
      language: string;
      text: string;
      translation: string;
    }[] = stored_translations ? JSON.parse(stored_translations) : [];

    const request_already_made = recent_translations.find(
      (recent) => recent.language === language && recent.text === text
    );

    if (!request_already_made) await postData({ language, text });
    else setData({ translation: request_already_made.translation });
  };

  useEffect(() => {
    const language = localStorage.getItem(local_storage_keys.languages);
    setLanguage(language as string);
  }, []);

  useEffect(() => {
    if (data) {
      const stored = localStorage.getItem(local_storage_keys.recent);

      const translations = stored ? JSON.parse(stored) : [];
      const newTranslation = {
        language,
        translation: data.translation,
        date: new Date(),
        text,
      };
      localStorage.setItem(
        local_storage_keys.recent,
        JSON.stringify([newTranslation, ...translations])
      );

      setcount((prev) => prev + 1);
    }
    if (language) {
      localStorage.setItem(local_storage_keys.languages, language);
    }
  }, [data]);

 

  return (
    <AppLayout key={count}>
      <View className="space-y-5 mb-5">
        <Header
          text="Content Translation"
          sub_text="Translate text into Ghanaian languages"
        />
        <Select
          label="Choose a language"
          options={languages.map((lang) => {
            return {
              label: lang.language,
              value: lang.language,
            };
          })}
          selected={language}
          onChange={setLanguage}
        />

        <Textarea
          label="Input text(English)"
          value={text}
          onChange={setText}
          placeholder="Enter text to translate..."
          rows={5}
          error={text.length < 1 ? "Text must be at least 1 characters" : ""}
        />
        <Button
          label="Tanslate Now"
          onPress={handlePost}
          disabled={text.length === 0 || language === "" || loading}
          loading={loading}
        />

        <View className="w-full min-h-40 bg-white rounded-lg p-2 space-y-2">
          <Text className="font-bold">Translation ({language}) </Text>
          <View className="flex flex-row gap-2">
            <View className="border-l-4 h-28 border-primary-500"></View>
            <Text>{data?.translation}</Text>
          </View>
        </View>

        <RecentTranslations key={count} />
      </View>
    </AppLayout>
  );
}
