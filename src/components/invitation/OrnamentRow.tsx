function Ornament({ center }: { center?: boolean }) {
  return (
    <div className="flex items-center justify-center">
      <div className="h-px w-full bg-violet-400/40" />
      <div
        className={[
          'mx-3 grid size-8 place-items-center rounded-full border border-fuchsia-300/45',
          center ? 'bg-sky-100/60' : 'bg-transparent',
        ].join(' ')}
      >
        <div className="grid size-4 rotate-45 place-items-center">
          <div className="size-2 rounded-full border border-violet-400/55" />
        </div>
      </div>
      <div className="h-px w-full bg-violet-400/40" />
    </div>
  )
}

export function OrnamentRow() {
  return (
    <div className="absolute left-6 right-6 top-6 grid grid-cols-3 items-center gap-4 text-violet-700/70">
      <Ornament />
      <Ornament center />
      <Ornament />
    </div>
  )
}
