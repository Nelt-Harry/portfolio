import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { PHOTO_AREA_ITEMS, type PhotoAreaItem } from './photoAreasData'

export function PhotoAreasPanel() {
  const [active, setActive] = useState<PhotoAreaItem | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearOpenTimer = useCallback(() => {
    if (openTimer.current) {
      clearTimeout(openTimer.current)
      openTimer.current = null
    }
  }, [])

  const scheduleOpen = useCallback(
    (item: PhotoAreaItem) => {
      clearOpenTimer()
      if (active) {
        setActive(item)
        setSlideIndex(0)
        return
      }
      openTimer.current = window.setTimeout(() => {
        setActive(item)
        setSlideIndex(0)
      }, 220)
    },
    [active, clearOpenTimer],
  )

  const handleRowLeave = useCallback(() => {
    clearOpenTimer()
  }, [clearOpenTimer])

  const openNow = useCallback((item: PhotoAreaItem) => {
    clearOpenTimer()
    setActive(item)
    setSlideIndex(0)
  }, [clearOpenTimer])

  const closeModal = useCallback(() => {
    setActive(null)
    setSlideIndex(0)
  }, [])

  const goPrev = useCallback(() => {
    if (!active) return
    setSlideIndex((i) => (i - 1 + active.images.length) % active.images.length)
  }, [active])

  const goNext = useCallback(() => {
    if (!active) return
    setSlideIndex((i) => (i + 1) % active.images.length)
  }, [active])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, closeModal, goNext, goPrev])

  useEffect(() => {
    if (!active) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  const modal =
    active &&
    createPortal(
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label={`Ảnh khu vực: ${active.label}`}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) closeModal()
        }}
      >
        <div
          className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm"
          aria-hidden
        />
        <div
          className="relative z-10 flex max-h-[min(90vh,820px)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-violet-200/60 bg-white shadow-2xl"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-violet-100 px-4 py-3 sm:px-5">
            <h3 className="font-semibold text-slate-900">{active.label}</h3>
            <button
              type="button"
              className="rounded-full px-3 py-1.5 text-sm font-medium text-violet-800 transition hover:bg-violet-100"
              onClick={closeModal}
            >
              Đóng
            </button>
          </div>
          <div className="relative flex min-h-[min(60vh,480px)] items-center justify-center bg-slate-900/5 p-3 sm:p-6">
            <img
              src={active.images[slideIndex]}
              alt=""
              className="max-h-[min(70vh,640px)] w-full max-w-full object-contain"
            />
            {active.images.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/95 text-lg text-violet-900 shadow-md transition hover:bg-white sm:left-4"
                  onClick={goPrev}
                  aria-label="Ảnh trước"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/95 text-lg text-violet-900 shadow-md transition hover:bg-white sm:right-4"
                  onClick={goNext}
                  aria-label="Ảnh sau"
                >
                  ›
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/40 px-3 py-1.5">
                  {active.images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={[
                        'size-2 rounded-full transition',
                        i === slideIndex ? 'bg-white' : 'bg-white/40',
                      ].join(' ')}
                      onClick={() => setSlideIndex(i)}
                      aria-label={`Ảnh ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>,
      document.body,
    )

  return (
    <>
      <div className="flex h-full flex-col rounded-2xl border border-fuchsia-200/55 bg-white/50 p-4 shadow-[0_1px_0_rgba(255,255,255,.65)_inset] backdrop-blur-sm sm:p-5">
        <div className="text-sm font-semibold text-slate-900">Photo areas</div>
        <ul className="mt-3 list-none space-y-0 divide-y divide-violet-100/80">
          {PHOTO_AREA_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="group flex w-full items-center gap-3 py-3 text-left transition hover:bg-violet-50/80"
                onMouseEnter={() => scheduleOpen(item)}
                onMouseLeave={handleRowLeave}
                onClick={() => openNow(item)}
              >
                <span className="grid size-11 shrink-0 overflow-hidden rounded-xl border border-violet-200/60 bg-white shadow-sm">
                  <img
                    src={item.icon}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="min-w-0 text-sm font-medium text-slate-800 group-hover:text-violet-950">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {modal}
    </>
  )
}
