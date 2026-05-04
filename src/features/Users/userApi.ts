import { request } from "../../services/api/axiosClient"
import type { User, CreateUser } from "./user.types"

// GET ALL
export const fetchUsersRequest = async () => {
  return await request<User[]>({
    url: "/users"
  })
}

// CREATE
export const createUserRequest = async (data: CreateUser) => {
  return await request<User>({
    method: "post",
    url: "/users",
    data
  })
}

// UPDATE
export const updateUserRequest = async (id: number, data: CreateUser) => {
  return await request<User>({
    method: "put",
    url: `/users/${id}`,
    data
  })
}

// DELETE
export const deleteUserRequest = async (id: number) => {
  return await request({
    method: "delete",
    url: `/users/${id}`
  })
}