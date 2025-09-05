import React from "react";
import { Text, TextInput, View } from "react-native";

interface TextareaProps {
  label?: string;
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  rows?: number; // number of lines to show
  error?: string; // optional error message
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  placeholder = "Enter text...",
  rows = 4,
  error,
}) => {
  return (
    <View className="w-full mb-4">
      {/* Label */}
      {label && <Text className="mb-2 text-gray-700">{label}</Text>}

      {/* Textarea input */}
      <TextInput
        multiline
        numberOfLines={rows}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        textAlignVertical="top" // ensures text starts at the top
        className={`border rounded-lg px-4 py-3 bg-white text-gray-800
          ${error ? "border-primary-500" : "border-gray-300"}
        `}
      />

      {/* Error message */}
      {error && <Text className="text-primary-500 mt-1">{error}</Text>}
    </View>
  );
};
