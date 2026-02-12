import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const getGeminiResponse = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "I'm currently offline (API Key missing). Please check back later!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful and knowledgeable agricultural assistant for 'Mini Crown Agro Ventures', a Nigerian agro-business founded by Ukoha David Ebuka. You help customers with questions about farming, foodstuff storage, nutritional benefits of Nigerian foods (yams, garri, palm oil, etc.), and recipes. Keep your answers concise, friendly, and culturally relevant to Nigeria. Use Naira for currency examples if needed. Always be polite and encourage them to buy from Mini Crown Agro.",
      }
    });

    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I'm having trouble connecting to the farm network right now. Please try again later.";
  }
};