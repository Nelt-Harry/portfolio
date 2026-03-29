import { motion, useReducedMotion } from 'framer-motion'
import portraitImg from '../assets/portrait.jpeg'
import { InfoCard } from '../components/invitation/InfoCard'
import { MiniPanel } from '../components/invitation/MiniPanel'
import { PhotoAreasPanel } from '../components/invitation/PhotoAreasPanel'

const ease = [0.22, 1, 0.36, 1] as const

export function InvitationDetailsPage() {
  const reduceMotion = useReducedMotion()
  const dur = reduceMotion ? 0.01 : 0.42

  return (
    <motion.section
      className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10"
      initial="start"
      animate="end"
      variants={{
        start: {},
        end: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.13,
            delayChildren: reduceMotion ? 0 : 0.05,
          },
        },
      }}
    >
      <motion.div
        className="lg:col-span-5"
        variants={{
          start: { opacity: 1, x: reduceMotion ? 0 : -28 },
          end: {
            opacity: 1,
            x: 0,
            transition: { duration: dur, ease },
          },
        }}
      >
        <div className="overflow-hidden rounded-[22px] border border-violet-200/55 bg-white/45 shadow-soft backdrop-blur-md sm:rounded-[26px]">
          <div className="relative aspect-[3/4] w-full max-h-[min(70vh,520px)] overflow-hidden bg-violet-100/40 sm:aspect-[4/5] sm:max-h-none">
            <img
              src={portraitImg}
              alt="Chân dung tốt nghiệp"
              className="h-full w-full object-cover object-[center_20%]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="px-4 py-4 sm:px-6 sm:py-5">
            <div className="text-center text-xl font-semibold uppercase tracking-[0.22em] text-violet-900/65">
              Liên Ngọc Thủy Tiên
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="min-w-0 lg:col-span-7"
        variants={{
          start: { opacity: 1, x: reduceMotion ? 0 : 32 },
          end: {
            opacity: 1,
            x: 0,
            transition: { duration: dur, ease },
          },
        }}
      >
        <div className="overflow-hidden rounded-[22px] border border-sky-200/50 bg-white/45 shadow-soft backdrop-blur-md sm:rounded-[26px]">
          <div className="border-b border-violet-200/40 px-4 py-4 sm:px-6 sm:py-5">
            <div className="font-serif text-3xl leading-tight text-slate-900 sm:text-4xl">
              Graduation
              <span className="block text-violet-900/85">Class of 2026</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-2 sm:gap-6 sm:px-6 sm:py-6">
            <InfoCard title="Thời gian" value="Sunday, 3:30PM" />
            <InfoCard title="Ngày" value="05.04.2026" />
            <InfoCard title="Địa điểm" value="Đại học UEH - Cơ sở A" />
            <InfoCard
              title="Địa chỉ"
              value="59C Nguyễn Đình Chiểu, P. Xuân Hòa, TP.HCM"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-violet-200/35 px-4 py-5 sm:grid-cols-2 sm:gap-6 sm:px-6 sm:py-6 md:gap-6">
            <MiniPanel
              title="Vị trí bãi giữ xe"
              lines={[
                'Bộ Giáo dục và Đào tạo - Đại diện các cơ quan phía Nam - 3 Công trường Quốc Tế, P. Xuân Hòa, TP.HCM',
                'Co.opmart Nguyễn Đình Chiểu - 168 Nguyễn Đình Chiểu, Phường Xuân Hòa, TP.HCM',
              ]}
              cta="Chỉ đường"
              to="https://maps.app.goo.gl/sLSsox7xQydYFT1G9"
            />
            <PhotoAreasPanel />
          </div>

          <div className="border-t border-violet-200/35 px-4 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
              <div className="text-base leading-relaxed text-slate-700">
                SĐT liên hệ: <span className="font-semibold text-slate-900">0935 394 217 </span>{' '}
                <span className="text-slate-600">(Chị Tiên)</span> {' -'} <span className="font-semibold text-slate-900">0909 281 577 </span>{' '}
                <span className="text-slate-600">(Anh Sỹ)</span>
              </div>
              <button
                type="button"
                className="w-full shrink-0 rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 sm:w-auto"
              >
                RSVP
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
