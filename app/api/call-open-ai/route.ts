import { MemoryType } from "@/lib/types";
import { NextRequest } from "next/server";
import { OpenAI } from "openai";

export async function POST(req: NextRequest) {
  const { prompt, context } = await req.json();

  const contextString = context
    .map(
      (memory: MemoryType) =>
        `${memory.title} - ${memory.description} - ${memory.location} - ${memory.createdAt}`
    )
    .join("\n");

  const openAiKey = process.env.OPENAI_API_KEY;
  const openai = new OpenAI({
    apiKey: openAiKey,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are Planny, a helpful chatbot in a memory lane timeline. You can only answer questions about the memories in the timeline. Don't answer questions that are not related to the timeline. Make sure to answer in a friendly, playful and engaging way. The timeline contains the memories of a user, in the following format: "Title - Description - Location - Date". You will be given a user prompt, and you will need to answer the question based on the memories in the timeline. You are Planny, talking to the user, about their memories. Here are the user memories for context: ${contextString}`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return Response.json({ message: response.choices[0].message.content });
}
