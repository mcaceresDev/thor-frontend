import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  fetchUsersRequest,
  createUserRequest,
  updateUserRequest,
  deleteUserRequest
} from "./userApi"

import type { User, CreateUser } from "./user.types"

interface UserState {
  items: User[]
  loading: boolean
  error: string | null
  isModalOpen: boolean
  selectedUser: User | null
}

const initialState: UserState = {
  items: [],
  loading: false,
  error: null,
  isModalOpen: false,
  selectedUser: null
}

// GET
export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async () => {
    return await fetchUsersRequest()
  }
)

// CREATE
export const createUser = createAsyncThunk(
  "users/create",
  async (data: CreateUser, { dispatch }) => {
    await createUserRequest(data)
    dispatch(fetchUsers())
  }
)

// UPDATE
export const updateUser = createAsyncThunk(
  "users/update",
  async ({ id, data }: { id: number; data: CreateUser }, { dispatch }) => {
    await updateUserRequest(id, data)
    dispatch(fetchUsers())
  }
)

// DELETE
export const deleteUser = createAsyncThunk(
  "users/delete",
  async (id: number, { dispatch }) => {
    await deleteUserRequest(id)
    dispatch(fetchUsers())
  }
)

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.selectedUser = action.payload || null
      state.isModalOpen = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
      state.selectedUser = null
    }
  },
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Error al cargar usuarios"
      })

      // CREATE
      .addCase(createUser.pending, (state) => {
        state.loading = true
      })
      .addCase(createUser.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Error al crear usuario"
      })

      // UPDATE
      .addCase(updateUser.pending, (state) => {
        state.loading = true
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false
      })

      // DELETE
      .addCase(deleteUser.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false
      })
  }
})

export const { openModal, closeModal } = userSlice.actions
export default userSlice.reducer