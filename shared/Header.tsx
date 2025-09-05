import { Text, View } from "react-native";

export default function Header({
  text,
  sub_text,
  size = "2xl",
}: {
  text: string;
  sub_text?: string;
  size?: Size;
}) {
  const textSizeMap: Record<Size, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  return (
    <View className="flex items-center justify-center">
      <Text className={`font-bold text-secondary-500 ${textSizeMap[size]}`}>
        {text}
      </Text>
      <Text className="text-secondary-100 text-center">{sub_text}</Text>
    </View>
  );
}

type Size = "sm" | "md" | "lg" | "xl" | "2xl";
