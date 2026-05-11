import type { ReactNode } from "react"

import { useCan }
from "../hooks/useCan"

interface Props {
  permission: string
  children: ReactNode
}

export const Can = ({
  permission,
  children
}: Props) => {

  const can = useCan()

  if (!can(permission)) {
    return null
  }

  return <>{children}</>
}