import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";

import { useRequestStore } from "./stores/request-store";

import "./App.css"

function App() {
  const {
    url,
    setUrl,
    sendRequest,
    response,
    loading,
    status,
    latency,
    size,
  } = useRequestStore();

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-[var(--background)] text-[var(--foreground)] font-sans">

      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--panel)] flex flex-col">
        <div className="p-4 font-semibold tracking-wide">
          Endpoint Studio
        </div>

        <div className="px-3 text-xs text-[var(--muted)] uppercase tracking-widest">
          Workspace
        </div>

        <div className="mt-4 px-3 text-sm text-[var(--muted)]">
          No collections yet
        </div>
      </aside>

      {/* Main */}
      <main className="flex flex-1 flex-col overflow-hidden">

        {/* Request Bar */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--panel)] px-3 py-2">

          <select className="rounded-md bg-[var(--panel-2)] border border-[var(--border)] px-2 py-1 text-sm">
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>PATCH</option>
            <option>DELETE</option>
          </select>

          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 rounded-md bg-[var(--panel-2)] border border-[var(--border)] px-3 py-1 text-sm outline-none focus:border-[var(--accent)]"
            placeholder="https://api.example.com"
          />

          <button
            onClick={sendRequest}
            className="rounded-md bg-[var(--accent)] px-4 py-1 text-sm font-medium text-white hover:opacity-90 active:scale-[0.98] transition"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </div>

        {/* Content Split */}
        <div className="flex flex-1 overflow-hidden divide-x divide-[var(--border)]">

          {/* Request Editor */}
          <div className="w-1/2 p-4 bg-[var(--panel)]">
            <div className="text-xs text-[var(--muted)] mb-3 tracking-widest">
              REQUEST
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-2)] p-3 text-sm text-[var(--muted)]">
              Request Editor (coming next)
            </div>
          </div>

          {/* Response */}
          <div className="w-1/2 flex flex-col bg-[var(--panel)]">

            {/* Response Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2 text-xs text-[var(--muted)]">

              <div className="flex gap-4">
                <span>
                  Status{" "}
                  <span className="text-emerald-400 font-semibold">
                    {status ?? "-"}
                  </span>
                </span>

                <span>
                  Time{" "}
                  <span className="text-sky-400 font-semibold">
                    {latency ? `${latency} ms` : "-"}
                  </span>
                </span>

                <span>
                  Size{" "}
                  <span className="text-violet-400 font-semibold">
                    {size ? `${size} B` : "-"}
                  </span>
                </span>
              </div>

            </div>

            {/* Response Body */}
            <div className="flex-1 overflow-auto p-4">
              <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap text-[var(--foreground)] opacity-90">
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