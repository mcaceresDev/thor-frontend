import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LoginPage from '../features/Auth/pages/LoginPage'
import GensetsPage from '../features/Gensets/pages/GensetPage'
import UsersPage from '../features/Users/pages/UsersPage'
import TemplatePage from '../features/Templates/pages/TemplatePage'
import MonitoringDashboard from '../features/Monitoring/pages/MonitoringDashcboard'
import NotFoundPage from '../pages/NotFoundPage'
import ForbiddenPage from '../pages/ForbiddenPage'
// COMPONENTES PARA VALIDACION DE PERMISOS
import { ProtectedRoute } from '../features/Auth/components/ProtectedRoute'
import { PermissionRoute } from '../features/Auth/components/PermissionRoute'
import { PERMISSIONS } from '../features/Auth/helpers/permissions'

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
          {/* RUTAS CON LA MISMA PLANTILLA */}
          <Route path='/gensets' element={<GensetsPage />} />

          <Route path='/users' element={
            <PermissionRoute permission={PERMISSIONS.USERS.VIEW}>
              <UsersPage />
            </PermissionRoute>
          } />
          
          <Route path='/templates' element={<TemplatePage />} />
          <Route path='/monitoring/:generatorId' element={<MonitoringDashboard />} />

        </Route>

        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </BrowserRouter>
  )
}
