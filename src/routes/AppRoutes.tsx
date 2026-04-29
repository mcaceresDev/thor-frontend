import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import GensetDetailPage from '../features/Gensets/pages/GensetDetailPage'
import LoginPage from '../features/Auth/pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'

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
            <Route path='/genset/:id' element={<GensetDetailPage />} />
            
        </Route>

        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </BrowserRouter>
  )
}
