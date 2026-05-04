import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createUserSchema } from "../user.schema"
import type { CreateUser } from "../user.types"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {
  closeModal,
  createUser,
  updateUser
} from "../userSlice"
import { showToast } from "../../../shared/alerts/alert.service"

export const UserModalForm = () => {
  const dispatch = useAppDispatch()

  const { isModalOpen, selectedUser } = useAppSelector(
    (state) => state.users
  )

  const isEdit = !!selectedUser

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<any>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      lastname: "",
      username: "",
      email: "",
      auth_provider: "local",
      password_hash: "",
      is_global_admin: false,
      active: true
    }
  })

  const authProvider = watch("auth_provider")

  // llenar formulario en edit
  useEffect(() => {
    if (selectedUser) {
      reset({
        name: selectedUser.name,
        lastname: selectedUser.lastname || "",
        username: selectedUser.username,
        email: selectedUser.email || "",
        auth_provider: selectedUser.auth_provider,
        password_hash: "", // nunca traes password real
        is_global_admin: selectedUser.is_global_admin,
        active: selectedUser.active
      })
    } else {
      reset({
        name: "",
        lastname: "",
        username: "",
        email: "",
        auth_provider: "local",
        password_hash: "",
        is_global_admin: false,
        active: true
      })
    }
  }, [selectedUser, reset])

  const onSubmit = (data: CreateUser) => {
    console.log("se ejecuta submit");
    if (isEdit) {
      dispatch(updateUser({
        id: selectedUser!.id,
        data
      }))
        .unwrap()
        .then(() => showToast("Usuario actualizado correctamente"))
        .catch(() => showToast("Error al actualizar usuario", "error"))
    } else {
      
      dispatch(createUser(data))
        .unwrap()
        .then(() => showToast("Usuario creado correctamente"))
        .catch(() => showToast("Error al crear usuario", "error"))
    }

    dispatch(closeModal())
  }

  if (!isModalOpen) return null

  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div className="modal fade show d-block">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-warning" style={{ backgroundColor: "#303030" }}>

            {/* HEADER */}
            <div className="modal-header">
              <h5 className="modal-title">
                {isEdit ? "Editar Usuario" : "Crear Usuario"}
              </h5>

              <button
                className="btn-close"
                onClick={() => dispatch(closeModal())}
              />
            </div>

            {/* BODY */}
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input className="input-transparent form-control form-control-sm" {...register("name")} />
                  {errors.name?.message && <small>{String(errors.name.message)}</small>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Apellido</label>
                  <input className="input-transparent form-control form-control-sm" {...register("lastname")} />
                </div>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input className="input-transparent form-control form-control-sm" {...register("username")} />
                  {errors.username?.message && <small>{String(errors.username.message)}</small>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Tipo de usuario</label>
                  <select className="input-transparent form-select form-select-sm" {...register("auth_provider")}>
                    <option value="local">Local</option>
                    <option value="ad">Active Directory</option>
                  </select>
                </div>

                {/* PASSWORD SOLO LOCAL */}
                {authProvider === "local" && (
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className="input-transparent form-control form-control-sm"
                      {...register("password_hash")}
                    />
                    {errors.password_hash?.message && (
                      <small>{String(errors.password_hash.message)}</small>
                    )}
                  </div>
                )}

                {/* EMAIL SOLO LOCAL (opcional) */}
                {authProvider === "local" && (
                  <div className="mb-3">
                    <label className="form-label">Email (opcional)</label>
                    <input className="input-transparent form-control form-control-sm" {...register("email")} />
                    {errors.email?.message && <small>{String(errors.email.message)}</small>}
                  </div>
                )}

                {/* INFO AD */}
                {authProvider === "ad" && (
                  <div className="alert alert-warning">
                    El email se generará automáticamente como:
                    <br />
                    <strong>{watch("username") || "usuario"}@empresa.com</strong>
                  </div>
                )}

                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    {...register("is_global_admin")}
                  />
                  <label className="form-check-label">
                    Administrador global
                  </label>
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    {...register("active")}
                  />
                  <label className="form-check-label">
                    Activo
                  </label>
                </div>

                <div className="d-flex">
                  <button className="btn btn-sm btn-warning mx-auto">
                    {isEdit ? "Actualizar" : "Guardar"}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}