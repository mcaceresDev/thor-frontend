import { configureStore } from "@reduxjs/toolkit"
import gensetReducer from "../features/Gensets/gensetSlice"
import userReducer from "../features/Users/userSlice"
import monitorReducer from "../features/Monitoring/monitoringSlice"
import dashboardReducer from "../features/Monitoring/dashboardSlice"

export const store = configureStore({
  reducer: {
    gensets: gensetReducer,
    users: userReducer,
    monitoring: monitorReducer,
    dashboard: dashboardReducer
  }
})

// Tipos globales
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch