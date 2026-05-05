import { z } from "zod"

export const metricSchema = z.object({
  generator_id: z.number(),
  key_name: z.string(),
  value: z.number().nullable(),
  timestamp: z.string()
})

export const latestMetricsSchema = z.object({
  generator_id: z.number(),
  metrics: z.array(metricSchema)
})