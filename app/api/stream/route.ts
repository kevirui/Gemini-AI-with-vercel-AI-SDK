import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { anthropic } from "@ai-sdk/anthropic";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const result = streamText({
      // model: google("gemini-2.5-flash"),
      model: anthropic("claude-3-5-sonnet"),
      prompt,
    });

    result.usage.then((usage) => {
      console.log({
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        totalTokens: usage.totalTokens,
      });
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error generating text: ", error);
    return Response.json({ error: "Failed to generate text" }, { status: 500 });
  }
}
