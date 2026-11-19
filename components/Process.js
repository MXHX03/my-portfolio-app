"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function Process() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sky-bg relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mono-label text-ink/70">MY PROCESS · 4 DRAWERS</div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mt-2">
          Pull a drawer to open it ↓
        </h2>

        <div className="mt-8 space-y-3">
          {processSteps.map((step, i) => {
            const active = open === i;
            return (
              <div key={step.key} className="select-none">
                <motion.button
                  onClick={() => setOpen(active ? -1 : i)}
                  animate={{ x: active ? 14 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="w-full flex items-center gap-4 rounded-lg px-5 py-4 text-left shadow-md border border-black/10"
                  style={{
                    background: "linear-gradient(180deg,#b98a56,#9b6f3f)",
                  }}
                >
                  <span className="w-3 h-3 rounded-full bg-[#3c2a17] shadow-inner shrink-0" />
                  <span className="font-mono text-xs text-[#f5e6cf] tracking-widest uppercase w-8">
                    0{i + 1}
                  </span>
                  <span className="font-serif text-xl text-[#fff7ea] font-semibold">
                    {step.key}
                  </span>
                  <span className="ml-auto text-[#f5e6cf]/70 text-sm">
                    {active ? "−" : "+"}
                  </span>
                </motion.button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="glass rounded-lg mt-2 ml-4 px-5 py-4 text-ink/80 leading-relaxed">
                        {step.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
