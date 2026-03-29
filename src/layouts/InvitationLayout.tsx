import { Outlet } from 'react-router-dom'

export function InvitationLayout() {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-[#e9d5ff] via-[#fce7f3] to-[#dbeafe] text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_18%_18%,rgba(167,139,250,.42),transparent_58%),radial-gradient(1000px_620px_at_82%_32%,rgba(244,114,182,.38),transparent_58%),radial-gradient(900px_720px_at_55%_85%,rgba(125,211,252,.4),transparent_58%)]"
      />
      <Outlet />
    </div>
  )
}
