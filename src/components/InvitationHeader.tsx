import { Link } from 'react-router-dom'
import { invitationDetailsPath } from '../routes'

type InvitationHeaderProps = {
  /** `home`: CTA to details. `details`: back link to invitation home. */
  variant?: 'home' | 'details'
}

const ctaClass =
  'inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-violet-300/70 bg-gradient-to-r from-white/90 to-violet-50/90 px-5 py-2.5 text-sm font-semibold text-violet-950 shadow-[0_4px_14px_-4px_rgba(88,28,135,.25)] backdrop-blur transition hover:from-white hover:to-white hover:shadow-[0_6px_20px_-4px_rgba(88,28,135,.3)] hover:ring-1 hover:ring-violet-300/60 sm:w-auto'

export function InvitationHeader({ variant = 'home' }: InvitationHeaderProps) {
  const isHome = variant === 'home'

  return (
    <header className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-violet-200/55 bg-white/50 px-4 py-4 shadow-[0_12px_40px_-16px_rgba(88,28,135,.22),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-md sm:px-6 sm:py-5">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-10 h-28 w-28 rounded-full bg-fuchsia-300/30 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-32 rounded-full bg-sky-300/35 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(100%,20rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300/80 to-transparent"
        />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 gap-4">
            <div
              aria-hidden
              className="hidden h-[4.25rem] w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-400 to-sky-400 shadow-sm sm:block"
            />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-800/80">
                {isHome ? 'Graduation · Class of 2026' : 'Event details'}
              </p>
              <h1 className="mt-1.5 font-serif text-xl font-semibold leading-snug tracking-tight text-violet-950 sm:text-2xl">
                {isHome ? 'Thư mời lễ tốt nghiệp' : 'Thông tin buổi lễ'}
              </h1>
              <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-violet-900/75">
                {isHome ? (
                  <>
                    Trân trọng kính mời quý khách đến dự lễ tốt nghiệp —{' '}
                    <span className="font-medium text-violet-950">
                      Chủ nhật, 3:00PM
                    </span>
                    <span className="text-violet-800/50"> · </span>
                    <span className="font-medium text-violet-950">
                      05.04.2026
                    </span>
                    <span className="text-violet-800/50"> · </span>
                    Đại học UEH
                  </>
                ) : (
                  <>
                    Địa điểm, thời gian và các thông tin kèm theo cho ngày lễ tốt
                    nghiệp.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center lg:flex-col lg:items-end xl:flex-row xl:items-center">
            {isHome ? (
              <Link to={invitationDetailsPath} className={ctaClass}>
                <span>Xem thông tin</span>
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </Link>
            ) : (
              <Link to="/" className={ctaClass}>
                <span aria-hidden className="text-base leading-none">
                  ←
                </span>
                <span>Về thư mời</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
