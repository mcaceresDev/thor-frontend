import { configureStore } from "@reduxjs/toolkit"
import gensetReducer from "../features/Gensets/gensetSlice"

export const store = configureStore({
  reducer: {
    gensets: gensetReducer
  }
})

// Tipos globales
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch