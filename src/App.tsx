import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";
import { useRequestStore } from "./stores/request-store";

function App() {
  const { url, setUrl, sendRequest, response, loading } = 
    useRequestStore();

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-[var(--background)] text-[var(--foreground)] font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--panel)] flex flex-col">
        <div className="p-4 font-semibold tracking-wide">Endpoint Studio</div>

        <div className="px-3 text-xs text-gray-400">WORKSPACE</div>
      </aside>

      {/* Main */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Request Bar */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--panel)] p-3">
          <select className="rounded border border-[var(--border)] bg-transparent px-2 py-1 text-sm">
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>PATCH</option>
            <option>DELETE</option>
          </select>

          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 rounded border border-[var(--border)] bg-transparent px-3 py-1 text-sm outline-none focus:border-blue-500"
            placeholder="https://api.example.com"
          />

          <button
            onClick={sendRequest}
            className="rounded bg-blue-600 px-4 py-1 text-sm font-medium text-white hover:bg-blue-500 active:scale-[0.98] transition"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>

        {/* Content Split */}
        <div className="flex flex-1 overflow-hidden">
          {/* Request Editor */}
          <div className="w-1/2 border-r border-[var(--border)] p-4">
            <div className="text-xs text-gray-400 mb-2">REQUEST</div>

            <div className="rounded border border-[var(--border)] bg-[var(--panel)] p-3 text-sm text-gray-300">
              Request Editor (coming next)
            </div>
          </div>

          {/* Response */}
          <div className="w-1/2 flex flex-col">
            <div className="border-b border-[var(--border)] px-4 py-2 text-xs text-gray-400">
              RESPONSE
            </div>

            <div className="flex-1 overflow-auto p-4">
              <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap">
                {response}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
