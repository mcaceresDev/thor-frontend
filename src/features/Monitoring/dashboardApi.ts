import { request } from "../../services/api/axiosClient"
import type { DashboardResponse } from "./types/dashboard.types"

export const fetchDashboardRequest = async (generatorId: number) => {
  return await request<DashboardResponse>({
    url: `/monitoring/${generatorId}/dashboard`
  })
}