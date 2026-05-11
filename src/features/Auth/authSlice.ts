import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit"

import {
  loginRequest,
  meRequest,
  logoutRequest
} from "./authApi"

import type { LoginDto, AuthUser } from "./auth.types"

interface AuthState {
  user: AuthUser | null
  permissions: string[]
  isAuthenticated: boolean
  loading: boolean
}

const initialState: AuthState = {
  user: null,
  permissions: [],
  isAuthenticated: false,
  loading: false
}

export const loginThunk =
  createAsyncThunk(
    "auth/login",
    async (data: LoginDto) => {

      await loginRequest(data)

      return await meRequest()
    }
  )

export const loadMeThunk =
  createAsyncThunk(
    "auth/me",
    async () => {
      return await meRequest()
    }
  )

export const logoutThunk =
  createAsyncThunk(
    "auth/logout",
    async () => {
      await logoutRequest()
    }
  )

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: builder => {

    builder

      .addCase(loginThunk.pending, state => {
        state.loading = true
      })

      .addCase(loginThunk.fulfilled,
        (state, action) => {

          state.user = action.payload.user
          state.permissions =
            action.payload.permissions

          state.isAuthenticated = true
          state.loading = false
        }
      )

      .addCase(loadMeThunk.fulfilled,
        (state, action) => {

          state.user = action.payload.user
          state.permissions =
            action.payload.permissions

          state.isAuthenticated = true
        }
      )

      .addCase(logoutThunk.fulfilled,
        state => {

          state.user = null
          state.permissions = []

          state.isAuthenticated = false
        }
      )
  }
})

export default authSlice.reducer