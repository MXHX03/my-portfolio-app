"use client";

import { motion } from "framer-motion";
import { profile, hero } from "@/lib/data";

function Corner({ className }) {
  return (
    <span className={`pointer-events-none absolute text-ink/50 text-xl font-light ${className}`}>
      +
    </span>
  );
}

/* A retro "gadget" slot. Drop a transparent PNG into /public/gadgets and set `img`. */
function Gadget({ img, glyph, tape, meter, note, rot = "0deg", className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block ${className}`}
      style={{ "--rot": rot }}
    >
      <div className="floaty" style={{ "--rot": rot }}>
        <div className="relative">
          {/* scanner frame */}
          <div className="relative w-[150px] h-[130px] border border-neon/70 rounded-md flex items-center justify-center bg-white/10 backdrop-blur-[2px]">
            <span className="absolute -top-2 -left-2 text-neon text-xs">┌</span>
            <span className="absolute -top-2 -right-2 text-neon text-xs">┐</span>
            <span className="absolute -bottom-2 -left-2 text-neon text-xs">└</span>
            <span className="absolute -bottom-2 -right-2 text-neon text-xs">┘</span>
            {img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={img} alt={tape} className="max-w-[80%] max-h-[80%] object-contain drop-shadow-xl" />
            ) : (
              <span className="text-5xl drop-shadow-lg" aria-hidden>{glyph}</span>
            )}
            <span className="tape absolute -top-3 left-4 -rotate-6">{tape}</span>
          </div>
          {meter && (
            <div className="mt-2 w-[150px]">
              <div className="flex justify-between mono-label text-white drop-shadow">
                <span>{meter.label}</span>
                <span className="text-neon">{meter.value}</span>
              </div>
              <div className="h-1 bg-white/40 rounded mt-1 overflow-hidden">
                <div className="h-full bg-neon" style={{ width: meter.value }} />
              </div>
            </div>
          )}
          {note && (
            <div className="mt-1 mono-label text-white/90 drop-shadow max-w-[150px]">{note}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="sky-bg relative min-h-screen w-full overflow-hidden pt-28 pb-16">
      {/* corner marks + labels */}
      <Corner className="top-24 left-6" />
      <Corner className="top-24 right-6" />
      <div className="absolute top-[88px] left-10 mono-label text-ink/70 hidden md:block">
        NO. 001 — PORTFOLIO ISSUE
      </div>
      <div className="absolute top-[88px] right-10 mono-label text-ink/70 hidden md:block">
        {profile.location} — SOFTWARE ENGINEER
      </div>

      {/* floating gadgets */}
      <Gadget
        className="top-[34%] left-[4%]"
        glyph="💻"
        tape="field laptop"
        rot="-8deg"
        delay={0.5}
        note="ideas never stay on one screen ↗"
      />
      <Gadget
        className="top-[30%] right-[4%]"
        glyph="📟"
        tape="signal meter"
        rot="7deg"
        delay={0.7}
        meter={{ label: "deploying…", value: "70%" }}
        note="> ping -t ideas"
      />

      {/* center content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 font-mono text-xs text-ink"
        >
          <span className="w-2 h-2 rounded-full bg-neon" />
          currently: <span className="text-ink/70">{profile.currently}</span>
          <span className="terminal-cursor !bg-ink/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-serif text-ink leading-[0.95]"
        >
          <span className="block text-6xl sm:text-7xl md:text-8xl font-black tracking-tight">
            {hero.line1[0]} {hero.line1[1]}
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl italic font-bold mt-1">
            {hero.line2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-ink/90 max-w-2xl mx-auto font-medium"
        >
          I&apos;m Muhydeen — a <span className="mark">software engineer</span> who turns
          messy problems into <span className="mark">clean, working systems</span>, from live telecom
          networks to the web.
        </motion.p>

        {/* CRT monitor */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <div className="relative">
            <span className="tape absolute -top-3 right-6 rotate-3 z-20">ID · {profile.shortName}</span>
            {/* monitor body */}
            <div className="relative rounded-[22px] bg-[#d8d2c4] p-4 pb-8 shadow-2xl border border-black/10 w-[300px] sm:w-[340px]">
              <div className="scanlines relative overflow-hidden rounded-lg bg-black aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                {/* scanning bar */}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-neon">
                    <span>SCANNING</span>
                    <span className="flex-1 h-[3px] bg-neon/30 relative overflow-hidden rounded">
                      <span className="absolute inset-y-0 left-0 bg-neon w-[93%]" />
                    </span>
                    <span>93%</span>
                  </div>
                </div>
                {/* corner brackets */}
                <span className="absolute top-2 left-2 text-neon text-xs">⌐</span>
                <span className="absolute top-2 right-2 text-neon text-xs">¬</span>
              </div>
              {/* base vents */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                <span className="w-10 h-1 rounded bg-black/20" />
                <span className="w-2 h-1 rounded bg-black/20" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
