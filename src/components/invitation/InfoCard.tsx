export function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-violet-200/60 bg-white/55 p-4 shadow-[0_1px_0_rgba(255,255,255,.7)_inset] backdrop-blur-sm">
      <div className="text-xs uppercase tracking-[0.22em] text-violet-800/70">
        {title}
      </div>
      <div className="mt-2 break-words text-base font-medium text-slate-900">
        {value}
      </div>
    </div>
  )
}
