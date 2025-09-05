import { Stack } from "expo-router";
import React from "react";
import { StatusBar, View } from "react-native";
import "./global.css";

export default function RootLayout() {
  return (
    <View className="flex-1">
      <StatusBar hidden />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}

// function CustomHeader() {
//   return (
//     <SafeAreaView className="bg-[#FE7164]">
//       <View className="flex-row items-center justify-between px-4 py-3">
//         {/* Logo + Title */}
//         <View className="flex-row items-center">
//           <Ionicons name="book-outline" size={24} color="white" />
//           <Text className="text-white text-lg font-bold ml-2">
//             EduTechLingo
//           </Text>
//         </View>

//         {/* Translate button */}
//         <TouchableOpacity className="bg-white/70 rounded-full px-4 py-1">
//           <Text className="text-black">Translate</Text>
//         </TouchableOpacity>

//         {/* Avatar placeholder */}
//         <View className="w-10 h-10 rounded-full bg-white" />
//       </View>
//     </SafeAreaView>
//   );
// }
