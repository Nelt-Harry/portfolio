import { InvitationHeader } from '../components/InvitationHeader'
import { InvitationDetailsPage } from './InvitationDetailsPage'

export function InvitationDetailsRoutePage() {
  return (
    <>
      <InvitationHeader variant="details" />
      <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-3 sm:px-6 sm:pb-16 sm:pt-5 lg:px-8">
        <InvitationDetailsPage />
      </main>
    </>
  )
}
