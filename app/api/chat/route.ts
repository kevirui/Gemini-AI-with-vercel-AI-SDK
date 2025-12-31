import { google } from "@ai-sdk/google";
import { UIMessage, streamText, convertToModelMessages } from "ai";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: google("gemini-2.5-flash"),
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant. Keep responses under 3 sentences and focus on practical examples.",
        },
        ...convertToModelMessages(messages),
      ],
    });

    result.usage.then((usage) => {
      console.log({
        messageCount: messages.length,
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
