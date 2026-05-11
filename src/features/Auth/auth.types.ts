export interface AuthUser {
  id: number
  name: string
  lastname?: string
  username: string
  email?: string
  role: string
}

export interface MeResponse {
  user: AuthUser
  permissions: string[]
}

export interface LoginDto {
  username: string
  password: string
}