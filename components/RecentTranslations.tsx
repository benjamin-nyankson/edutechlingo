import { Ionicons } from "@expo/vector-icons";
import { formatDistanceToNow } from "date-fns";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const RecentTranslations = () => {
  const stored = localStorage.getItem("recent_translations");
  const recent_translations: [
    { language: string; translations: string; date: string },
  ] = stored ? JSON.parse(stored) : [];
  
  const distanceToNow = useCallback((date: string) => {
    return formatDistanceToNow(date, { addSuffix: true });
  }, []);

  return (
    <View className="bg-gray-50 w-full rounded-lg p-3">
      <Text className="font-bold text-xl mb-3">Recently Used</Text>
      <View className="space-y-2">
        {recent_translations.slice(0, 3).map((recent, idx) => {
          return (
            <TouchableOpacity key={recent.language + idx}>
              <View className=" p-4 rounded-md flex flex-row items-center justify-between">
                <View className="flex flex-row items-center gap-2">
                  <View className="bg-primary-200 p-2 rounded-full">
                    <Ionicons name="language" size={25} color="white" />
                  </View>
                  <View>
                    <Text className="font-bold text-xl">{recent.language}</Text>{" "}
                    <Text className="text-xs">
                      Last used {distanceToNow(recent.date)}
                    </Text>
                  </View>
                </View>
                <Text className="text-xl text-primary-500"> &gt; </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
