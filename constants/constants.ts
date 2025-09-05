import { ILanguage } from "@/types/types";
import { images } from "./images";

export const appName = "EduTechLingo";

export const languages: ILanguage[] = [
  {
    id: 1,
    language: "Twi",
    description: "Akan language widely spoken in Ghana",
    image: images.twi,
  },
  {
    id: 2,
    language: "Ewe",
    description: "Spoken in southeast Ghana and Togo",
    image: images.ewe,
  },
  {
    id: 3,
    language: "Ga",
    description: "Native to the Greater Accra region",
    image: images.ga,
  },
  {
    id: 4,
    language: "Dagbani",
    description: "Spoken in northern Ghana",
    image: images.dagbani,
  },
  {
    id: 5,
    language: "Fanti",
    description: "Spoken in centeral part of Ghana",
    image: images.twi,
  },
  {
    id: 6,
    language: "Hausa",
    description: "Spoken in almost every part of Ghana",
    image: images.ewe,
  },
];

export const local_storage_keys = {
  languages: "languagages",
  recent: "recent_translations",
};
