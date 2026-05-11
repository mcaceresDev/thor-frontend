import { useAppSelector }
from "../../../app/hooks"

export const useCan = () => {

  const permissions =
    useAppSelector(
      state => state.auth.permissions
    )

  return (permission: string) => {
    return permissions.includes(permission)
  }
}