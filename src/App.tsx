import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { InvitationLayout } from './layouts/InvitationLayout'
import { InvitationDetailsRoutePage } from './pages/InvitationDetailsRoutePage'
import { InvitationLandingPage } from './pages/InvitationLandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvitationLayout />}>
          <Route index element={<InvitationLandingPage />} />
          <Route path="details" element={<InvitationDetailsRoutePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
