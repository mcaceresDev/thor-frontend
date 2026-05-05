import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchLatestMetricsRequest } from "./monitoringApi"
import type { LatestMetricsResponse } from "./types/monitoring.types"

interface MonitoringState {
  data: LatestMetricsResponse | null
  loading: boolean
  error: string | null
}

const initialState: MonitoringState = {
  data: null,
  loading: false,
  error: null
}

// thunk
export const fetchLatestMetrics = createAsyncThunk(
  "monitoring/fetchLatest",
  async (generatorId: number) => {
    return await fetchLatestMetricsRequest(generatorId)
  }
)

const monitoringSlice = createSlice({
  name: "monitoring",
  initialState,
  reducers: {
    clearMonitoring: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestMetrics.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchLatestMetrics.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchLatestMetrics.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Error al cargar métricas"
      })
  }
})

export const { clearMonitoring } = monitoringSlice.actions
export default monitoringSlice.reducer