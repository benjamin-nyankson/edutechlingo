import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
console.log(process.env.GEMINI_API_KEY);

app.post("/api/translate", async (req: Request, res: Response) => {
  const { language, text } = req.body;
  console.log("helloo");
  console.log({language, text})
  if (!language || !text) {
    return res
      .status(400)
      .send({ error: "Missing language or text in request body" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
    Translate the text below into ${language}.
    - Keep the meaning accurate and natural.
    - Do not translate proper names (people, places, brands).
    - Only return the translated text, without explanations.
    
    Text:
    "${text}"

    example=> language: Twi, text: How are you
    output: wo ho te sɛn?
    `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const translatedText = response.text();

    res.send({ translation: translatedText });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to translate text" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
