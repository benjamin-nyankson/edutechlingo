import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ReactNode } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Iprops {
  children: ReactNode;
}
const AppLayout = ({ children }: Iprops) => {
  return (
    <SafeAreaView className="flex-1 mb-10 bg-bgColor">
      <View className="flex-row items-center justify-between px-4 py-3 bg-primary-500">
        {/* Logo + Title */}
        <TouchableOpacity onPress={()=>router.push("/choose-language")}>
        <View className="flex-row items-center" >
          <Ionicons name="book-outline" size={24} color="white" />
          <Text className="text-white text-lg font-bold ml-2">
            EduTechLingo
          </Text>
        </View>
        </TouchableOpacity>

        {/* Translate button */}
        <TouchableOpacity className="bg-white/70 rounded-full px-4 py-1" onPress={()=>router.push("/translate")}>
          <Text className="text-black">Translate</Text>
        </TouchableOpacity>

        {/* Avatar placeholder */}
        <View className="w-10 h-10 rounded-full bg-white" />
      </View>

      <ScrollView>
        <View className="p-5">{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppLayout;
