export interface Metric {
  generator_id: number
  key_name: string
  value: number | null
  timestamp: string
}

export interface LatestMetricsResponse {
  generator_id: number
  metrics: Metric[]
}