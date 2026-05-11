import api from "./axiosClient"

let isRefreshing = false

api.interceptors.response.use(
  response => response,

  async error => {

    const originalRequest =
      error.config

    if (
      error.response?.status === 401 &&
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

        window.location.href = "/login"
      }
    }

    return Promise.reject(error)
  }
)