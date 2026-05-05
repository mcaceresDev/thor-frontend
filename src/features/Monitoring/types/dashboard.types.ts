export interface Metric {
  key_name: string
  value: number | null
  timestamp: string
}

export interface GeneratorHeader {
  id: number
  name: string
  brand: string
  model: string
  gateway_model?: string | null
  capacity?: number | null
  unit_capacity?: string | null
}

export interface DashboardResponse {
  generator: GeneratorHeader
  metrics: Metric[]
}