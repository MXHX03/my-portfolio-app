import Link from "next/link";
import { profile } from "@/lib/data";

export default function Nav() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass rounded-full w-full max-w-3xl pl-5 pr-4 py-2.5 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <span className="text-lg" aria-hidden>🤖</span>
          <span className="min-w-0">
            <span className="block font-semibold text-sm text-ink leading-tight truncate">
              {profile.name}
            </span>
            <span className="block mono-label text-ink/60 leading-tight">
              {profile.roleLine}
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-ink/80 shrink-0">
          <a href={`mailto:${profile.email}`} className="hidden sm:inline hover:text-ink">
            {profile.email}
          </a>
          <Link href="/resume" className="hover:text-ink">
            Resume
          </Link>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}
