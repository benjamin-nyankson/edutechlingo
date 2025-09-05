import { languages } from "@/constants/constants";
import { Button } from "@/shared/components/Button";
import Header from "@/shared/Header";
import { ILanguage } from "@/types/types";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { RecentTranslations } from "./RecentTranslations";

export const LanguageSelection = () => {
  return (
    <View className="space-y-5 mb-5">
      <Header
        text="Choose Your Language"
        size="2xl"
        sub_text="Choose your prefered local language for content translation"
      />

      <View>
        <FlatList
          data={languages}
          renderItem={({ item }) => {
            return <LanguageCard {...item} />;
          }}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            gap: 20,
            marginBottom: 10,
          }}
        />
      </View>
      <RecentTranslations/>

      <Button label="Back to Home" onPress={() => router.push("/")} />
    </View>
  );
};

const LanguageCard = (props: ILanguage) => {
  return (
    <TouchableOpacity
      className=" bg-primary-100 flex items-center justify-center rounded-lg p-2"
      style={{ width: "47%" }}
      onPress={() => {
        localStorage.setItem("language", props.language);
        setTimeout(() => {
          router.push("/translate"); 
        }, 10);
      }}
    >
      <Image
        source={props.image}
        style={{
          width: 150,
          height: 100,
          resizeMode: "contain",
        }}
      />
      <Header text={props.language} size="lg" />
      <Text className="text-center ">{props.description}</Text>
    </TouchableOpacity>
  );
};
