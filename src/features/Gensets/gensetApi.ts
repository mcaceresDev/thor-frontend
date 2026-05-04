import { request } from "../../services/api/axiosClient"
import type { Genset, CreateGenset } from "./genset.types"

// GET ALL
export const fetchGensetsRequest = async () => {
  return await request<Genset[]>({
    url: "/gensets"
  })
}

// CREATE
export const createGensetRequest = async (data: CreateGenset) => {
  return await request<Genset>({
    method: "post",
    url: "/gensets",
    data
  })
}

// UPDATE
export const updateGensetRequest = async (id: number, data: CreateGenset) => {
  return await request<Genset>({
    method: "put",
    url: `/gensets/${id}`,
    data
  })
}

// DELETE
export const deleteGensetRequest = async (id: number) => {
  return await request({
    method: "delete",
    url: `/gensets/${id}`
  })
}