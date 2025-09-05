# 📚 Nkyerease – AI-Powered Educational Language App  
<img src="https://portfolio-react-nine-lime.vercel.app/assets/edutech-B0TY1GaX.png" alt="App Preview" width="400"/>

![Expo](https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini%20API-4285F4?logo=google&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

Nkyerease is a mobile app built with **React Native (Expo)** that helps learners translate educational content into Ghanaian languages using **AI (Gemini API)**. It makes knowledge more accessible by breaking down language barriers in education.  

---

## 🚀 Features  
- 🌐 **AI Translation** – Translate English into Ghanaian languages (Twi, Ga, Ewe, etc.)  
- ⚡ **Caching System** – Store and reuse recent translations offline with AsyncStorage  
- 📱 **Modern UI/UX** – Styled with **NativeWind (Tailwind for React Native)**  
- 🧭 **Smooth Navigation** – Tabbed and non-tabbed screens powered by **Expo Router**  
- 🛠 **Reusable Components** – Buttons, inputs, selects, and text areas for scalable design  
- 🔒 **Error Handling** – Fallback to English if AI translation fails  

---

## 🛠 Tech Stack  
- **Framework**: [React Native (Expo)](https://expo.dev/)  
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for RN)  
- **AI Integration**: [Gemini API](https://ai.google.dev/gemini-api)  
- **Navigation**: [Expo Router](https://expo.github.io/router/docs)  
- **State Management**: React hooks + AsyncStorage  

---

## 📂 Project Structure  
```
nkyerease/
├── app/                # App screens & navigation
│   ├── (tabs)/         # Tabbed navigation screens
│   ├── index.tsx       # Entry screen
├── components/         # Reusable UI components
├── services/           # API + cache utilities
│   ├── usePost.ts      # Custom POST request hook
│   ├── useTranslate.ts # AI translation hook
│   ├── translationCache.ts
├── shared/             # Shared logic/types
├── layouts/            # Layout components
└── README.md           # Documentation
```

---

## ⚡ Getting Started  

### 1. Clone the Repository  
```bash
git clone https://github.com/benjamin-nyankson/nkyerease.git
cd nkyerease
```

### 2. Install Dependencies  
```bash
npm install
# or
yarn install
```

### 3. Start the App  
```bash
npx expo start
```

---

## 🔑 Environment Setup  

Create a `.env` file in the root:  

```env
EXPO_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

---

## 📖 Usage Example  

```tsx
import { useTranslate } from "@/services/useTranslate";

export default function Example() {
  const { translation, translate, loading } = useTranslate("Twi");

  return (
    <View>
      <Button title="Translate" onPress={() => translate("Education is power")} />
      {loading ? <Text>Loading...</Text> : <Text>{translation}</Text>}
    </View>
  );
}
```

---

## 🌍 Why Nkyerease?  
> "Nkyerease" means **translation** in Twi.  
This project empowers learners by breaking language barriers, making education more **inclusive** and **accessible** across Ghana.  

---

## 📌 Roadmap  
- [ ] Add more Ghanaian languages  
- [ ] Offline-first mode  
- [ ] User corrections / community contributions  
- [ ] Audio translations (text-to-speech)  

---

## 🤝 Contributing  
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.  

---

## 📜 License  
This project is licensed under the MIT License.  
