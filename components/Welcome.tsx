import { appName } from "@/constants/constants";
import { images } from "@/constants/images";
import { Button } from "@/shared/components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export const Welcome = () => {
  return (
    <ScrollView>
      <View className="flex-1 items-center justify-center w-full space-y-4 my-10">
        <View className="flex flex-row items-center justify-center gap-3">
          <MaterialIcons name="school" size={40} color="#FE7164" />
          <Text className="text-3xl font-bold text-primary-500">
            {appName}
          </Text>
        </View>

        <View className="flex items-center justify-center  bg-gray-200 rounded-lg">
          <Image
            style={{
              width: 300,
              height: 200,
              resizeMode: "contain",
            }}
            source={images.welcome}
          />
        </View>
        <View className="flex items-center gap-3 w-10/12">
          <Text className="text-primary-500 text-3xl font-bold  text-center">
            Welcome to {appName}
          </Text>
          <Text className="text-xl text-center text-secondary-100">
            Your journey to language learning in Ghana starts here.
          </Text>
          <Text className="text-xl text-center text-secondary-100">
            {appName} helps children and teachers learn local languages
            through interactive lessons, games, and cultural stories.
          </Text>

          <View className="mt-5">
            <Stepper />
          </View>
          <Button label="Get Started" onPress={() => router.push("/choose-language")} />
        </View>
      </View>
    </ScrollView>
  );
};

const Stepper = () => {
  return (
    <View className="flex items-center justify-center flex-row gap-2">
      {Array.from({ length: 3 }).map((_, index) => (
        <View
          key={index}
          className={`size-4 ${index === 0 ? "bg-primary-500" : "bg-primary-200"} rounded-full `}
        ></View>
      ))}
    </View>
  );
};
