import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  fetchGensetsRequest,
  createGensetRequest,
  updateGensetRequest,
  deleteGensetRequest
} from "./gensetApi"

import type { Genset, CreateGenset } from "./genset.types"

interface GensetState {
  items: Genset[]
  loading: boolean
  error: string | null
  isModalOpen: boolean
  selectedGenset: Genset | null
}

const initialState: GensetState = {
  items: [],
  loading: false,
  error: null,
  isModalOpen: false,
  selectedGenset: null
}

// GET
export const fetchGensets = createAsyncThunk(
  "gensets/fetch",
  async () => {
    return await fetchGensetsRequest()
  }
)

// CREATE
export const createGenset = createAsyncThunk(
  "gensets/create",
  async (data: CreateGenset, { dispatch }) => {
    await createGensetRequest(data)
    dispatch(fetchGensets())
  }
)

// UPDATE
export const updateGenset = createAsyncThunk(
  "gensets/update",
  async ({ id, data }: { id: number; data: CreateGenset }, { dispatch }) => {
    await updateGensetRequest(id, data)
    dispatch(fetchGensets())
  }
)

// DELETE
export const deleteGenset = createAsyncThunk(
  "gensets/delete",
  async (id: number, { dispatch }) => {
    await deleteGensetRequest(id)
    dispatch(fetchGensets())
  }
)

const gensetSlice = createSlice({
  name: "gensets",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.selectedGenset = action.payload || null
      state.isModalOpen = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
      state.selectedGenset = null
    }
  },
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchGensets.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchGensets.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchGensets.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Error al cargar generadores"
      })

      // CREATE
      .addCase(createGenset.pending, (state) => {
        state.loading = true
      })
      .addCase(createGenset.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(createGenset.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Error al crear generador"
      })

      // UPDATE
      .addCase(updateGenset.pending, (state) => {
        state.loading = true
      })
      .addCase(updateGenset.fulfilled, (state) => {
        state.loading = false
      })

      // DELETE
      .addCase(deleteGenset.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteGenset.fulfilled, (state) => {
        state.loading = false
      })
  }
})

export const { openModal, closeModal } = gensetSlice.actions
export default gensetSlice.reducer