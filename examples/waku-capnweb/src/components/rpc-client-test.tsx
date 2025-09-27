"use client";

import { useState } from "react";
import { getRpcClient } from "../lib/rpc-client";

export const RpcClientTest: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let message = e.currentTarget.message.value || "World";
      let result = await getRpcClient()?.hello(message);
      setResult(result ?? "No result");
    } catch (error) {
      setResult(
        `Error calling RPC: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="message"
          type="text"
          placeholder="Type something..."
          className="border p-2"
        />
        <button
          type="submit"
          className="rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {result ? (
        <div>
          <div>Result</div>
          <div>{result}</div>
        </div>
      ) : null}
    </div>
  );
};
