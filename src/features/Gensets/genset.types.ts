import { z } from "zod"
import { createGensetSchema, updateGensetSchema } from "./genset.schema"

export interface Genset {
  id: number
  name: string
  description?: string | null
  brand: string
  model?: string | null
  gateway_model?: string | null
  capacity?: number | null
  unit_capacity?: string | null
  host: string
  http_port: number
  http_username_encrypted?: string | null
  http_password_encrypted?: string | null
  snmp_version: string
  snmp_port: number
  snmp_read_community: string
  snmp_write_community: string
  is_active: boolean
  last_polled_at?: string | null
  deleted_at?: string | null
  created_at: string
  updated_at: string
}

export type CreateGenset = z.infer<typeof createGensetSchema>
export type UpdateGenset = z.infer<typeof updateGensetSchema>