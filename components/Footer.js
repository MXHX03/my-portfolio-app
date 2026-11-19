import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="sky-bg relative py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mono-label text-ink/60">END OF ISSUE · NO. 001</div>
        <h2 className="font-serif text-5xl md:text-6xl font-black text-ink mt-4 leading-tight">
          Let&apos;s build <span className="italic">something.</span>
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 mt-8 glass rounded-full px-6 py-3 font-medium text-ink hover:brightness-105 transition"
        >
          Hiring an engineer? Say hi at{" "}
          <span className="font-semibold underline">{profile.email}</span> ↗
        </a>

        <div className="flex items-center justify-center gap-5 mt-8 text-sm font-medium text-ink/80">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <Link href="/resume" className="hover:text-ink">
            Resume
          </Link>
        </div>

        <div className="mono-label text-ink/50 mt-10">
          © {new Date().getFullYear()} {profile.name.toUpperCase()} · LAGOS, NG
        </div>
      </div>
    </footer>
  );
}
