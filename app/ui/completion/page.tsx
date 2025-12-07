"use client";

import { useState } from "react";

export default function CompletionPage() {
  const [prompt, setPrompt] = useState("");
  const [completion, setCompletion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const complete = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setPrompt("");

    try {
      const response = await fetch("/api/completion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to generate completion");
      }

      setCompletion(data.text);
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch ">
      {error ? (
        <div className="text-center text-red-500 mb-4">{error}</div>
      ) : null}

      {isLoading ? (
        <div className="text-center text-lg font-medium">Loading...</div>
      ) : completion ? (
        <div className="whitespace-pre-wrap">{completion}</div>
      ) : null}

      {/* Display area for completion will go here */}
      <form
        onSubmit={complete}
        className="w-full max-w-md fixed bottom-0 mx-auto left-0 right-0 p-4 bg-zinc-500 dark:bg-zinc-900"
      >
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="How can i help you?"
            className="flex-1 dark:bg-zinc-800 p-2 border border-zinc-300 dark:border-zinc-700 rounded-md transition-colors"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
