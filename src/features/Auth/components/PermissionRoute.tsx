import { Navigate } from "react-router-dom"
import { useCan } from "../hooks/useCan"

interface Props {
  permission: string
  children: React.ReactNode
}

export const PermissionRoute = ({
  permission,
  children
}: Props) => {

  const can = useCan()

  if (!can(permission)) {
    return <Navigate to="/forbidden" replace />
  }

  return children
}