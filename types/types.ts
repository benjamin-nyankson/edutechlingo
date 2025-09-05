import { ImageSourcePropType } from "react-native";

export interface ILanguage {
  id: number;
  language: string;
  description: string;
  image: ImageSourcePropType;
}
