import { z } from "zod"

export const userBaseSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  lastname: z.string().nullable().optional(),

  username: z.string().min(1, "El username es obligatorio"),

  email: z.string().email("Email inválido").optional().or(z.literal(""))
  .transform((val) => (val === "" ? undefined : val)),

  auth_provider: z.enum(["local", "ad"]),

  password_hash: z.string().nullable().optional(),

  is_global_admin: z.boolean().default(false),
  active: z.boolean().default(true)
})

export const createUserSchema = userBaseSchema.superRefine((data, ctx) => {
  // LOCAL
  if (data.auth_provider === "local") {
    if (!data.password_hash) {
      ctx.addIssue({
        path: ["password_hash"],
        code: "custom",
        message: "La contraseña es obligatoria para usuarios locales"
      })
    }
  }

  // AD
  if (data.auth_provider === "ad") {
    if (data.password_hash) {
      ctx.addIssue({
        path: ["password_hash"],
        code: "custom",
        message: "Usuarios AD no deben tener contraseña"
      })
    }
  }
})

export const updateUserSchema = userBaseSchema.partial()

export const userIdSchema = z.object({
  id: z.number().int().positive()
})