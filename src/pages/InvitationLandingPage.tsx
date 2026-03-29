import { InvitationHeader } from '../components/InvitationHeader'
import { InvitationHomePage } from './InvitationHomePage'

export function InvitationLandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <InvitationHeader variant="home" />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="w-full max-w-6xl">
          <InvitationHomePage />
        </div>
      </main>
    </div>
  )
}
