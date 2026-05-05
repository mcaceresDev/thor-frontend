import { request } from "../../services/api/axiosClient"
import type { LatestMetricsResponse } from "./types/monitoring.types"

export const fetchLatestMetricsRequest = async (generatorId: number) => {
  return await request<LatestMetricsResponse>({
    url: `/monitoring/${generatorId}/latest`
  })
}