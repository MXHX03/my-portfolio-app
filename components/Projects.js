import { stats, projects } from "@/lib/data";

function ArrowLink({ href, children }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-mono text-white/35 border border-white/15 rounded-full px-3 py-1.5 cursor-not-allowed">
        {children} —
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-xs font-mono text-ink bg-neon rounded-full px-3 py-1.5 font-semibold hover:brightness-95 transition"
    >
      {children} ↗
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative bg-ink text-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* stats row */}
        <div className="flex flex-wrap items-end gap-x-12 gap-y-6 border-b border-white/15 pb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mr-auto">
            Selected work
          </h2>
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl md:text-5xl text-neon leading-none">{s.value}</div>
              <div className="mono-label text-white/50 mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        {/* project list */}
        <div className="divide-y divide-white/10">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="rise group grid md:grid-cols-[1fr_auto] gap-6 py-9 items-start"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="mono-label text-neon">0{i + 1}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold group-hover:text-neon transition-colors">
                    {p.title}
                  </h3>
                </div>
                <p className="text-white/70 mt-3 max-w-xl leading-relaxed">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono uppercase tracking-wide border border-white/20 rounded-full px-2.5 py-1 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-3 md:text-right">
                <div className="mono-label text-white/50">
                  {p.role} · {p.year}
                </div>
                <div className="flex gap-2">
                  <ArrowLink href={p.live}>Live</ArrowLink>
                  <ArrowLink href={p.repo}>Code</ArrowLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
