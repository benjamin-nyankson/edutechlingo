import React, { useState } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  selected?: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  selected,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    onChange(value);
    setOpen(false);
  };

  return (
    <View className="w-full">
      {label && <Text className="mb-2 text-gray-700">{label}</Text>}

      {/* Selected value */}
      <TouchableOpacity
        className="border border-gray-300 rounded-lg px-4 py-3 bg-white"
        onPress={() => setOpen(true)}
      >
        <Text className="text-gray-800">
          {options.find((o) => o.value === selected)?.label || "Select..."}
        </Text>
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal visible={open} transparent animationType="fade">
        <TouchableOpacity
          className="flex-1 bg-black/50 justify-center items-center"
          activeOpacity={1}
          onPress={() => setOpen(false)}
        >
          <View className="bg-white w-3/4 rounded-lg p-4">
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="px-4 py-3 border-b border-gray-200"
                  onPress={() => handleSelect(item.value)}
                >
                  <Text
                    className={`text-base ${
                      selected === item.value ? "text-primary-500 font-bold" : ""
                    }`}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
