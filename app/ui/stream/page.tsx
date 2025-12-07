"use client";

import { useCompletion } from "@ai-sdk/react";

export default function StreamPage() {
  const {
    completion,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    stop,
  } = useCompletion({
    api: "/api/stream",
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center">
      {/* Header / Title (Optional) */}
      <div className="w-full max-w-2xl p-4 border-b border-zinc-800">
        <h1 className="text-xl font-semibold text-zinc-200">AI Chat Stream</h1>
      </div>

      {/* Chat Area */}
      <div className="w-full max-w-2xl flex-1 flex flex-col p-4 overflow-y-auto pb-32 space-y-4">
        {error && <div className="text-red-500">{error.message}</div>}
        {isLoading && !completion && <div>Loading...</div>}
        {completion ? (
          <div className="max-w-none">
            <div className="whitespace-pre-wrap leading-relaxed text-zinc-300">
              {completion}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-zinc-500 italic">
            Start a conversation...
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-950/80 backdrop-blur-md border-t border-zinc-800 flex justify-center z-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setInput("");
            handleSubmit();
          }}
          className="w-full max-w-2xl flex gap-3"
        >
          <input
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all font-medium"
            type="text"
            placeholder="How can I help you today?"
            value={input}
            onChange={handleInputChange}
            autoFocus
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-6 py-3 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 active:scale-95"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
          <button
            type="button"
            onClick={stop}
            disabled={!isLoading}
            className="bg-red-600 hover:bg-red-500 text-white rounded-xl px-6 py-3 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-500/20 active:scale-95"
          >
            Stop
          </button>
        </form>
      </div>
    </div>
  );
}
