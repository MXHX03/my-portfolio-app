"use client";

import { useEffect, useRef, useState } from "react";
import { terminal, profile } from "@/lib/data";

const PROMPT = "muhy@portfolio:~$";

export default function Terminal() {
  const [lines, setLines] = useState([]); // {kind:'cmd'|'out'|'sys', text}
  const [queue, setQueue] = useState([]);
  const [ran, setRan] = useState([]); // which commands have run (for highlight)
  const scrollRef = useRef(null);

  // boot sequence on mount
  useEffect(() => {
    setLines([{ kind: "sys", text: terminal.boot }]);
    enqueueCommand("whoami");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // drain the queue one line at a time (printer effect)
  useEffect(() => {
    if (queue.length === 0) return;
    const [next, ...rest] = queue;
    const delay = next.kind === "cmd" ? 180 : 70;
    const t = setTimeout(() => {
      setLines((l) => [...l, next]);
      setQueue(rest);
    }, delay);
    return () => clearTimeout(t);
  }, [queue]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [lines]);

  function enqueueCommand(cmd) {
    const out = terminal.commands[cmd] || ["command not found"];
    setRan((r) => (r.includes(cmd) ? r : [...r, cmd]));
    setQueue((q) => [
      ...q,
      { kind: "cmd", text: `${PROMPT} ${cmd}` },
      ...out.map((text) => ({ kind: "out", text })),
      { kind: "out", text: "" },
    ]);
  }

  return (
    <section className="relative bg-[#050d08] text-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mono-label text-neon">THE TERMINAL</div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">
          Run a command. Meet the engineer.
        </h2>
        <p className="text-white/50 font-mono text-sm mt-3">tap a command below ↓</p>

        {/* window */}
        <div className="terminal rounded-xl mt-8 overflow-hidden">
          {/* title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0c1f12] border-b border-[#1d3a22]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-white/40 font-mono">muhy-os — zsh</span>
          </div>
          {/* body */}
          <div ref={scrollRef} className="p-4 md:p-6 h-[340px] overflow-y-auto text-sm leading-relaxed">
            {lines.map((line, i) => (
              <div
                key={i}
                className={
                  line.kind === "cmd"
                    ? "text-white"
                    : line.kind === "sys"
                    ? "text-neon/70"
                    : "text-[#86ef63] whitespace-pre-wrap"
                }
              >
                {line.text || " "}
              </div>
            ))}
            {queue.length === 0 && (
              <div className="text-white">
                {PROMPT} <span className="terminal-cursor" />
              </div>
            )}
          </div>
        </div>

        {/* command buttons */}
        <div className="flex flex-wrap gap-2 mt-5">
          {terminal.order.map((cmd) => (
            <button
              key={cmd}
              onClick={() => enqueueCommand(cmd)}
              className={`font-mono text-xs rounded-full px-4 py-2 border transition ${
                ran.includes(cmd)
                  ? "border-neon/60 text-neon bg-neon/10"
                  : "border-white/20 text-white/70 hover:border-neon hover:text-neon"
              }`}
            >
              {cmd}
            </button>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs rounded-full px-4 py-2 border border-white/20 text-white/70 hover:border-neon hover:text-neon transition"
          >
            ./contact-me
          </a>
        </div>
      </div>
    </section>
  );
}
