"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile, resume } from "@/lib/data";

function Printer() {
  return (
    <div className="relative mx-auto w-[280px]">
      {/* paper slot lip */}
      <div className="h-3 bg-[#cfc7b4] rounded-t-md mx-6" />
      {/* body */}
      <div className="relative bg-[#ded6c4] rounded-xl border border-black/10 shadow-xl px-6 py-5">
        <div className="flex gap-[3px] mb-4">
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={i} className="w-full h-[6px] bg-black/10 rounded" />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <span className="w-3.5 h-3.5 rounded-full bg-black/20" />
            <span className="w-3.5 h-3.5 rounded-full bg-black/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-neon shadow-[0_0_8px_#c2f24f] self-center" />
          </div>
          <div className="font-mono text-[9px] bg-[#9fb08f] text-[#163a16] px-2 py-0.5 rounded">
            READY
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-5">
      <h3 className="text-[11px] font-bold tracking-[0.12em] uppercase text-ink border-b border-black/20 pb-1">
        {title}
      </h3>
      <div className="mt-2 text-[12.5px] leading-relaxed text-ink/90">{children}</div>
    </div>
  );
}

export default function ResumeView() {
  const [printKey, setPrintKey] = useState(0);
  const sheetRef = useRef(null);

  return (
    <section className="sky-bg relative min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="tape rotate-[-2deg] inline-block">▶ PRINT / ENGINEER</span>
        <h1 className="font-serif text-5xl md:text-7xl font-black text-ink mt-5 leading-[0.95]">
          One page. <br />
          <span className="italic">One call away.</span>
        </h1>
        <p className="mt-5 text-ink/80 max-w-xl mx-auto">
          Three years across software, frontend, and live telecom networks — summed up on a single
          page. Read it here, print a copy for the panel, or grab the PDF.
        </p>

        <div className="mt-10">
          <Printer />
        </div>

        {/* paper sheet */}
        <motion.div
          key={printKey}
          ref={sheetRef}
          initial={{ clipPath: "inset(0 0 100% 0)", y: -10 }}
          animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mx-auto -mt-2 max-w-2xl bg-white text-ink shadow-2xl rounded-sm text-left p-8 md:p-10 border border-black/10"
        >
          {/* header */}
          <div className="text-center border-b border-black/20 pb-3">
            <h2 className="font-serif text-2xl font-black tracking-wide">{profile.name.toUpperCase()}</h2>
            <div className="text-[12px] font-semibold tracking-wide text-ink/80 mt-1">
              {profile.roleLine}
            </div>
            <div className="text-[11px] text-ink/70 mt-2">
              {profile.location.replace(", NG", ", Nigeria")} · {profile.email} · {profile.phone} ·{" "}
              <a href={profile.linkedin} className="underline">LinkedIn</a> ·{" "}
              <a href={profile.github} className="underline">GitHub</a>
            </div>
          </div>

          <Section title="Professional Summary">
            <p>{resume.summary}</p>
          </Section>

          <Section title="Core Skills">
            <ul className="columns-2 gap-6 text-[12px] [&>li]:mb-1 [&>li]:break-inside-avoid list-disc list-inside">
              {resume.coreSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section title="Professional Experience">
            {resume.experience.map((job) => (
              <div key={job.company + job.dates} className="mb-3">
                <div className="flex justify-between items-baseline gap-3">
                  <span className="font-semibold">
                    {job.company} <span className="font-normal text-ink/70">· {job.role}</span>
                  </span>
                  <span className="text-[11px] text-ink/60 whitespace-nowrap">{job.dates}</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-[12px] text-ink/85">
                  {job.points.map((pt, k) => (
                    <li key={k}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Projects">
            {resume.projects.map((pr) => (
              <div key={pr.name} className="mb-2">
                <span className="font-semibold">{pr.name}.</span>{" "}
                <span className="text-ink/85">{pr.text}</span>
              </div>
            ))}
          </Section>

          <div className="grid md:grid-cols-2 gap-x-8">
            <Section title="Education">
              <div className="font-semibold">{resume.education.school}</div>
              <div>{resume.education.degree}</div>
              <div className="text-[11px] text-ink/60">{resume.education.dates}</div>
              <p className="text-[11.5px] mt-1 text-ink/75">{resume.education.coursework}</p>
            </Section>

            <Section title="Certifications">
              <ul className="list-disc list-inside space-y-0.5 text-[12px]">
                {resume.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Section>
          </div>

          <div className="text-right text-[10px] text-ink/40 mt-6 font-mono">Page 1 / 1</div>
        </motion.div>

        {/* buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <button
            onClick={() => setPrintKey((k) => k + 1)}
            className="inline-flex items-center gap-2 bg-neon text-ink font-semibold rounded-xl px-5 py-3 shadow hover:brightness-95 transition"
          >
            🖨 Print again
          </button>
          <button
            onClick={() => sheetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="inline-flex items-center gap-2 glass text-ink font-semibold rounded-xl px-5 py-3 hover:brightness-105 transition"
          >
            👁 Read it
          </button>
          <a
            href={profile.resumePdf}
            download
            className="inline-flex items-center gap-2 bg-ink text-white font-semibold rounded-xl px-5 py-3 shadow hover:brightness-110 transition"
          >
            ↓ Download PDF
          </a>
        </div>

        <div className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block glass rounded-full px-5 py-2.5 text-ink font-medium"
          >
            Hiring an engineer? Say hi at{" "}
            <span className="underline font-semibold">{profile.email}</span> ↗
          </a>
        </div>
        <div className="mono-label text-ink/60 mt-6">1 PAGE · A4 · UPDATED {resume.updated}</div>
      </div>
    </section>
  );
}
