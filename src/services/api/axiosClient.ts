import axios, { AxiosError } from "axios"
import type { AxiosRequestConfig } from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000
})

type ConfigParams = {
  method?: AxiosRequestConfig["method"]
  url: string
  headers?: Record<string, string>
  data?: unknown
  params?: Record<string, unknown>
}

export async function request<T>({
  method = "get",
  url,
  headers = {},
  data,
  params
}: ConfigParams): Promise<T> {
  try {
    const response = await api({
      method,
      url,
      headers,
      data,
      params
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError<any>

    if (err.response) {
      throw err.response.data
    }

    throw new Error("Network error")
  }
}