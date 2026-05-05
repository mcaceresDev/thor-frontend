import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchDashboardRequest } from "./dashboardApi"
import type { DashboardResponse } from "./types/dashboard.types"

interface DashboardState {
  data: DashboardResponse | null
  loading: boolean
  error: string | null
}

const initialState: DashboardState = {
  data: null,
  loading: false,
  error: null
}

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetch",
  async (generatorId: number) => {
    return await fetchDashboardRequest(generatorId)
  }
)

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Error al cargar dashboard"
      })
  }
})

export default dashboardSlice.reducer