import { z } from "zod"
const requiredMessage= "Este campo es requerido y debe tener una longitud valida"
export const gensetBaseSchema = z.object({
  name: z.string().min(1, requiredMessage).max(100),
  description: z.string().max(150).nullable().optional(),
  brand: z.string().min(1, requiredMessage).max(100),
  model: z.string().max(100).nullable().optional(),
  gateway_model: z.string().max(100).nullable().optional(),
  capacity: z.number().int("Debes ingresar un numero entero").nullable().optional(),
  unit_capacity: z.string().nullable().optional(),
  host: z.string().min(1, requiredMessage).max(255),
  http_port: z.number().int().default(80),
  http_username_encrypted: z.string().max(100).nullable().optional(),
  http_password_encrypted: z.string().max(100).nullable().optional(),
  snmp_version: z.string().default("v2"),
  snmp_port: z.number().int().default(161),
  snmp_read_community: z.string().default("public"),
  snmp_write_community: z.string().default("private"),
  is_active: z.boolean().default(true)
})

export const createGensetSchema = gensetBaseSchema
export const updateGensetSchema = gensetBaseSchema.partial()