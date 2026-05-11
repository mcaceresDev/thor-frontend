permissions.ts
======================================
export const PERMISSIONS = {
    USERS: {
    VIEW: "users.view",
    CREATE: "users.create",
    UPDATE: "users.update",
    DELETE: "users.delete"
},

GENSETS: {
    VIEW: "gensets.view",
    CREATE: "gensets.create",
    CONTROL: "gensets.control"
},

DASHBOARD: {
    VIEW: "dashboard.view"
}
} as const


auth.selector.ts
======================================
import { RootState } from "../../app/store"

export const selectPermissions = (state: RootState) =>
    state.auth.permissions

PermissionStatus.utils.ts
======================================
export const hasPermission = (
    permissions: string[],
    permission: string
) => {
    return permissions.includes(permission)
}


useCan.ts
======================================

import { useAppSelector } from "../../../app/hooks"
import { selectPermissions } from "../auth.selectors"
import { hasPermission } from "../utils/permission.utils"

export const useCan = () => {
  const permissions = useAppSelector(selectPermissions)

  return (permission: string) => {
    return hasPermission(permissions, permission)
  }
}



USO
=======================================
const can = useCan()

{can(PERMISSIONS.USERS.CREATE) && (
  <Button />
)}

RUTAS PROTEGIDAS
=======================================
<Route
  path="/users"
  element={
    <CanRoute permission={PERMISSIONS.USERS.VIEW}>
      <UsersPage />
    </CanRoute>
  }
/>

MENU DINAMICO
=======================================
const menuItems = [
  {
    label: "Usuarios",
    path: "/users",
    permission: PERMISSIONS.USERS.VIEW
  }
]