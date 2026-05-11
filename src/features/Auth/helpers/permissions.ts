export const PERMISSIONS = {

  USERS: {
    VIEW: "users.view",
    CREATE: "users.create",
    UPDATE: "users.update",
    DELETE: "users.delete",
    SETROLE: "users.assign_role",
    SETGENSET: "users.assign_genset"
  },

  ROLES: {
    VIEW: "roles.view",
    CREATE: "roles.create",
    UPDATE: "roles.update",
    DELETE: "roles.delete"
  },

  GENSETS: {
    VIEW: "gensets.view",
    CREATE: "gensets.create",
    UPDATE: "gensets.update",
    DELETE: "gensets.delete",
    CONTROL: "gensets.control_panel",
    DETAILS: "gensets.view_details"
  },
  
  TEMPLATES: {
    VIEW: "templates.view",
    CREATE: "templates.create",
    UPDATE: "templates.update",
    DELETE: "templates.delete"
  },

  LOGS: {
    VIEW: "monitor_logs.view"
  }

} as const