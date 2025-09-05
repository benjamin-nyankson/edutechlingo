import { Button } from "@/shared/components/Button";
import { Ionicons } from "@expo/vector-icons";
import { speak, pause, resume, stop } from "expo-speech";
import React, { useState, useEffect } from "react";
import { View } from "react-native";

export default function Speech({
  text,
  language,
}: {
  text: string;
  language: string;
}) {
  const [speechStatus, setSpeechStatus] = useState<
    "idle" | "playing" | "paused"
  >("idle");

  // Stop speech when the component unmounts or the text/language changes
  useEffect(() => {
    return () => {
      stop();
    };
  }, [text, language]);

  const handlePress = () => {
    if (speechStatus === "idle") {
      speak(text, {
        language: language,
        pitch: 1.0,
        rate: 1.0,
        onStart: () => {
          setSpeechStatus("playing");
        },
        onDone: () => {
          setSpeechStatus("idle");
        },
        onStopped: () => {
          setSpeechStatus("idle");
        },
        onError: () => {
          setSpeechStatus("idle");
        },
      });
    } else if (speechStatus === "playing") {
      pause();
      setSpeechStatus("paused");
    } else if (speechStatus === "paused") {
      resume();
      setSpeechStatus("playing");
    }
  };

  const getIconName = (): keyof typeof Ionicons.glyphMap => {
    if (speechStatus === "playing") {
      return "pause";
    }
    if (speechStatus === "paused") {
      return "play";
    }
    return "mic";
  };

  return (
    <View>
      <Button
        label=""
        onPress={handlePress}
        disabled={!text || !language}
        icon={{
          type: Ionicons,
          name: getIconName(),
          size: 32,
          color: "white",
        }}
      />
    </View>
  );
}
