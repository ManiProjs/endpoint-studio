import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";

function App() {
  return (
    <div className="flex h-screen bg-background font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r p-4">
        <h1 className="font-bold">Endpoint Studio</h1>
      </aside>

      {/* Main Area */}
      <main className="flex flex-1 flex-col">
        {/* Request Bar */}
        <div className="flex gap-2 border-b p-4">
          <select className="rounded border px-2 py-1">
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>PATCH</option>
            <option>DELETE</option>
          </select>

          <input
            className="flex-1 rounded border px-3 py-1"
            placeholder="https://api.example.com"
          />

          <button className="rounded border px-4 py-1">Send</button>
        </div>

        {/* Request Editor */}
        <div className="flex-1 border-b p-4">Request Editor</div>

        {/* Response */}
        <div className="h-64 p-4 font-mono">Response Viewer</div>
      </main>
    </div>
  );
}

export default App;
