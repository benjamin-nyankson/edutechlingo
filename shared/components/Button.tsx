import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface IProps {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  label,
  onPress,
  variant = "primary",
  disabled,
  loading,
}: IProps) => {
  const baseStyle = "px-6 py-3 rounded-xl items-center justify-center";

  const variants: Record<typeof variant, string> = {
    primary: disabled ? "bg-primary-300" : " bg-primary-500",
    secondary: "bg-gray-600",
    outline: "border border-blue-600 bg-transparent",
  };

  const textVariants: Record<typeof variant, string> = {
    primary: "text-white",
    secondary: "text-white",
    outline: "text-blue-600",
  };

  return (
    <TouchableOpacity
      className={`${baseStyle} ${variants[variant]} flex flex-row gap-3 w-full ${disabled ? " cursor-not-allowed" : ""}`}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {loading && <ActivityIndicator size="small" color="#E55F53" />}

      <Text className={`text-base font-semibold ${textVariants[variant]}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
