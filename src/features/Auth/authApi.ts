import { request } from "../../services/api/axiosClient"

import type {
  LoginDto,
  MeResponse
} from "./auth.types"

export const loginRequest = (
  data: LoginDto
) => {

  return request({
    method: "post",
    url: "/auth/login",
    data
  })
}

export const meRequest =
  (): Promise<MeResponse> => {

  return request({
    method: "get",
    url: "/auth/me"
  })
}

export const logoutRequest = () => {

  return request({
    method: "post",
    url: "/auth/logout"
  })
}

export const refreshRequest = () => {

  return request({
    method: "post",
    url: "/auth/refresh"
  })
}