import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LoginPage from '../features/Auth/pages/LoginPage'
import GensetsPage from '../features/Gensets/pages/GensetPage'
import UsersPage from '../features/Users/pages/UsersPage'
import NotFoundPage from '../pages/NotFoundPage'
import MonitoringDashboard from '../features/Monitoring/pages/MonitoringDashcboard'
import { ProtectedRoute } from '../features/Auth/components/ProtectedRoute'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          {/* aca van las demas rutas */}
          <Route path='/gensets' element={<GensetsPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/monitoring/:generatorId' element={<MonitoringDashboard />} />

        </Route>

        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </BrowserRouter>
  )
}
