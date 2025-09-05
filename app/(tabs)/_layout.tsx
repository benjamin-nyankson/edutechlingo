import { Ionicons } from "@expo/vector-icons";
import { Icon } from "@expo/vector-icons/build/createIconSet";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarStyle: {
          backgroundColor: "#E55F53",
          height: 60,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="choose-language"
        options={{
          headerShown: false,
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return <TabIcon text="Home" name="home" icon={Ionicons} />;
          },
        }}
      />
      <Tabs.Screen
        name="translate"
        options={{
          headerShown: false,
          title: "Translate",
          tabBarShowLabel: false,
          // tabBarButton: () => null,
          tabBarIcon: ({ focused }) => {
            return <TabIcon text="Translate" name="language" icon={Ionicons} />;
          },
        }}
      />
      <Tabs.Screen
        name="lessons"
        options={{
          headerShown: false,
          title: "Translate",
          tabBarShowLabel: false,
          // tabBarButton: () => null,
          tabBarIcon: ({ focused }) => {
            return <TabIcon text="Lessons" name="book" icon={Ionicons} />;
          },
        }}
      />
    </Tabs>
  );
}

const TabIcon = ({
  icon,
  text,
  name,
}: {
  text: string;
  icon: Icon<any, any>;
  name: string;
}) => {
  const Icon = icon;
  return (
    <View className=" flex items-center mt-5">
      <Icon name={name} size={30} color="white" />
      <Text className="text-white">{text}</Text>{" "}
    </View>
  );
};
