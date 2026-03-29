import { Link } from 'react-router-dom'
import { OrnamentRow } from '../components/invitation/OrnamentRow'
import { Pill } from '../components/invitation/Pill'
import { invitationDetailsPath } from '../routes'

export function InvitationHomePage() {
  return (
    <section
      className={[
        'relative overflow-hidden rounded-[28px] border-2 border-violet-500/45',
        'bg-gradient-to-br from-[#e9d5ff] via-[#fce7f3] to-[#dbeafe]',
        'shadow-[0_22px_56px_-14px_rgba(88,28,135,.38),0_8px_24px_-8px_rgba(219,39,119,.14),inset_0_1px_0_rgba(255,255,255,.9)]',
        'ring-2 ring-white/75 ring-offset-2 ring-offset-[#f5f0ff]',
        'backdrop-blur-xl',
      ].join(' ')}
    >
      {/* Soft purple / pink / blue wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_15%_20%,rgba(196,181,253,.55),transparent_55%),radial-gradient(800px_380px_at_85%_30%,rgba(251,207,232,.5),transparent_55%),radial-gradient(700px_400px_at_50%_90%,rgba(186,230,253,.45),transparent_55%)]"
      />
      <div className="absolute inset-0 opacity-55 [mask-image:radial-gradient(700px_280px_at_50%_18%,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(91,33,182,.08)_1px,transparent_1px),linear-gradient(rgba(91,33,182,.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative grid gap-8 px-4 py-12 sm:gap-10 sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-6 lg:px-14 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-6 text-center sm:gap-8">
          <Pill className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md ring-violet-300/40">
            Cordially invites you to attend
          </Pill>

          <div className="relative w-full max-w-xl rounded-[24px] border border-violet-200/60 bg-white/40 p-5 shadow-[0_1px_0_rgba(255,255,255,.65)_inset] backdrop-blur-md sm:p-8">
            <OrnamentRow />
            <div className="mt-8 flex items-center justify-center">
              <Link
                to={invitationDetailsPath}
                className="group relative w-full max-w-xs rounded-xl border border-violet-300/70 bg-white/70 px-4 py-3 text-center text-sm font-medium text-violet-950 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 sm:w-auto sm:px-5"
              >
                <span className="absolute -inset-px rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,.35),transparent_40%,rgba(255,255,255,.20))] opacity-0 transition group-hover:opacity-100" />
                <span className="relative">NHẤN ĐỂ MỞ THƯ MỜI</span>
              </Link>
            </div>
          </div>

          <Pill className="bg-gradient-to-r from-fuchsia-600 to-sky-600 text-white shadow-md ring-fuchsia-300/40">
            Class of 2026
          </Pill>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md rounded-[26px] border border-fuchsia-200/55 bg-white/40 p-5 shadow-[0_1px_0_rgba(255,255,255,.65)_inset] backdrop-blur-md sm:p-7">
            <div className="absolute -left-8 top-8 h-20 w-20 rounded-3xl bg-[#c4b5fd]/70 blur-2xl" />
            <div className="absolute -right-10 bottom-8 h-24 w-24 rounded-3xl bg-[#a5d8ff]/65 blur-2xl" />

            <div className="flex flex-wrap items-center gap-4">
              <div className="grid size-16 shrink-0 place-items-center rounded-3xl bg-white/70 ring-1 ring-violet-200/70 sm:size-20">
                <span className="text-lg font-semibold tracking-wide text-violet-950 sm:text-xl">
                  TT
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-[0.22em] text-violet-900/75">
                  Graduation
                </div>
                <div className="mt-1 font-serif text-2xl leading-tight text-violet-950 sm:text-3xl">
                  Thủy Tiên&apos;s
                  <span className="block text-fuchsia-900/90">Invitation</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 rounded-2xl border border-sky-200/55 bg-white/50 p-4 sm:mt-7 sm:p-5">
              <div className="flex flex-col gap-2 text-sm text-violet-950/90 sm:flex-row sm:items-center sm:justify-between">
                <span>Sunday, 3:00PM</span>
                <span className="w-fit rounded-full bg-sky-100/95 px-3 py-1 text-xs text-sky-950 ring-1 ring-sky-300/70">
                  Save the date
                </span>
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-500 px-4 py-3 text-center text-xl font-semibold tracking-[0.28em] text-white shadow-md sm:px-5 sm:text-2xl">
                05 . 04 . 2026
              </div>
              <div className="pt-1 text-center text-sm text-violet-950/85">
                Đại học UEH - Cơ sở A
                <div className="text-xs text-violet-900/70">
                  59C Nguyễn Đình Chiểu, P. Xuân Hòa, TP.HCM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
