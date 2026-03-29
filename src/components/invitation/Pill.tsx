import type { ReactNode } from 'react'

export function Pill({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'rounded-full px-8 py-4 font-serif text-3xl leading-none tracking-tight text-white shadow-soft',
        'ring-1 ring-white/10',
        className ?? 'bg-white/10',
      ].join(' ')}
    >
      {children}
    </div>
  )
}
