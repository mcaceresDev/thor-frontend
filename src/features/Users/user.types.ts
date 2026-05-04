import { z } from "zod"
import { createUserSchema, updateUserSchema } from "./user.schema"

export interface User {
  id: number
  name: string
  lastname?: string | null
  username: string
  email?: string | null
  auth_provider: "local" | "ad"
  password_hash?: string | null
  is_global_admin: boolean
  active: boolean
  created_at: string
  updated_at: string
}

export type CreateUser = z.infer<typeof createUserSchema>
export type UpdateUser = z.infer<typeof updateUserSchema>