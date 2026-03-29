export function MiniPanel({
  title,
  lines,
  cta,
  to,
}: {
  title: string
  lines: string[]
  /** Omit to hide the bottom CTA (e.g. photo areas use its own UI). */
  cta?: string
  /** External URL opened in a new browser tab (e.g. Maps). */
  to?: string
}) {
  const ctaClass =
    'mt-4 inline-flex w-full shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:brightness-105'

  return (
    <div className="flex h-full flex-col rounded-2xl border border-fuchsia-200/55 bg-white/50 p-4 shadow-[0_1px_0_rgba(255,255,255,.65)_inset] backdrop-blur-sm sm:p-5">
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-2 space-y-1 text-sm leading-relaxed text-slate-700">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
      {cta ? (
        to ? (
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClass}
          >
            {cta}
          </a>
        ) : (
          <button type="button" className={ctaClass}>
            {cta}
          </button>
        )
      ) : null}
    </div>
  )
}
