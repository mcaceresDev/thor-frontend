import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import GensetsPage from '../features/Gensets/pages/GensetsPage'
import { GensetTest } from '../features/Gensets/pages/GensetTest'
import LoginPage from '../features/Auth/pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import MonitoringDashboard from '../features/Monitoring/pages/MonitoringDashcboard'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          element={
            //  <ProtectedRoute>
            <MainLayout />
            //  </ProtectedRoute>
            }
            > 
            {/* aca van las demas rutas */}
            <Route path='/gensets' element={<GensetTest />} />
            <Route path='/genset/:id' element={<GensetsPage />} />
            <Route path='/monitoring/:id' element={<MonitoringDashboard />} />
            
        </Route>

        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </BrowserRouter>
  )
}
