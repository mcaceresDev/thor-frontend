import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import MainLayout from '../layouts/MainLayout'
// import ProjectPage from '../features/Projects/pages/ProjectPage'
// import { ProjectDetailPage } from '../features/Projects/pages/ProjectDetailsPage'
// import { ServiceDetailPage } from '../features/Services/pages/ServiceDetailPage'
// import EndpointDetailPage from '../features/Endpoints/pages/EndpointDetailPage'
// import TestPage from '../features/Test/pages/TestPage'
import LoginPage from '../features/Auth/pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        {/* <Route
          element={
            //  <ProtectedRoute>
            <MainLayout />
            //  </ProtectedRoute>
            }
            > */}
            {/* aca van las demas rutas */}
            {/* <Route path='/projects' element={<ProjectPage />} />
            <Route path='/project/:id' element={<ProjectDetailPage />} />
            <Route path='/service/:id' element={<ServiceDetailPage />} />
            <Route path='/endpoint/:id' element={<EndpointDetailPage />} />
            <Route path='/test' element={<TestPage />} /> */}

        {/* </Route> */}

        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </BrowserRouter>
  )
}
