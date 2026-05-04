import { configureStore } from "@reduxjs/toolkit"
import gensetReducer from "../features/Gensets/gensetSlice"
import userReducer from "../features/Users/userSlice"

export const store = configureStore({
  reducer: {
    gensets: gensetReducer,
    users: userReducer
  }
})

// Tipos globales
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch