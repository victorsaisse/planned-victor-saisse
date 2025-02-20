import { NextRequest } from "next/server";
import { OpenAI } from "openai";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const openAiKey = process.env.OPENAI_API_KEY;
  const openai = new OpenAI({
    apiKey: openAiKey,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that can answer questions.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return Response.json({ message: response.choices[0].message.content });
}
