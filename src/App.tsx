import { useState, useEffect } from 'react'
import { useAppDispatch } from './app/hooks'
import { loadMeThunk } from './features/Auth/authSlice'
import AppRoutes from './routes/AppRoutes'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadMeThunk()).unwrap()
      .catch(() => {
         console.log("usuario no autenticado")
      })
  }, [])

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
