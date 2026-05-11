import { Navigate }
from "react-router-dom"

import { useAppSelector }
from "../../../app/hooks"

export const ProtectedRoute = ({
  children
}: any) => {

  const isAuthenticated =
    useAppSelector(
      state => state.auth.isAuthenticated
    )

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}