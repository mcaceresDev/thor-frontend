import api from "./axiosClient"

let isRefreshing = false

api.interceptors.response.use(
  response => response,

  async error => {

    const originalRequest = error.config

    // backend apagado
    if (!error.response) {
      return Promise.reject(error)
    }

    // evitar loop refresh
    if (
      originalRequest.url?.includes("/auth/refresh")
    ) {

      return Promise.reject(error)
    }

    // token expirado
    if (
      error.response.status === 401 &&
      !originalRequest._retry
    ) {

      originalRequest._retry = true

      try {

        if (!isRefreshing) {

          isRefreshing = true

          await api.post("/auth/refresh")

          isRefreshing = false
        }

        return api(originalRequest)

      } catch {

        return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  }
)