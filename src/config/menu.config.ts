import { PERMISSIONS } from "../features/Auth/helpers/permissions"
import { CircuitBoard, ClipboardClock, EvCharger, Users } from 'lucide-react'

export const menuItems = [

  {
    label: "Generadores",
    path: "/gensets",
    icon: EvCharger,
    permission: PERMISSIONS.GENSETS.VIEW
  },

  {
    label: "Plantillas",
    path: "/templates",
    icon: CircuitBoard,
    permission: PERMISSIONS.TEMPLATES.VIEW
  },

  {
    label: "Usuarios",
    path: "/users",
    icon: Users,
    permission: PERMISSIONS.USERS.VIEW
  },


  {
    label: "Logs",
    path: "/logs",
    icon: ClipboardClock,
    permission: PERMISSIONS.LOGS.VIEW
  }
]