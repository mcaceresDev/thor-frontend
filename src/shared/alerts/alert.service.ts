// shared/alerts/alert.service.ts
import Swal from "sweetalert2"

// base con bootstrap
const baseSwal = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-danger mx-2",
    cancelButton: "btn btn-secondary mx-2"
  },
  buttonsStyling: false
})

export const showToast = (message: string, icon: "success" | "error" | "info" = "success") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true
  })

  Toast.fire({
    icon,
    title: message
  })
}

export const showAlert = (message: string, icon: "success" | "error" | "warning" = "success") => {
  baseSwal.fire({
    title: message,
    icon,
    timer: 2000,
    showConfirmButton: false
  })
}

export const showConfirm = async (
  message: string = "¿Estás seguro?",
  confirmText: string = "Sí, eliminar"
) => {
  const result = await baseSwal.fire({
    title: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: "Cancelar",
    reverseButtons: true
  })

  return result.isConfirmed
}

export const showConfirmDelete = async (
  bodyText:string = "",
  deleteItemName:string = "",
  message: string = "¿Estás seguro?",
  confirmText: string = "Sí, eliminar",
) => {
  const result = await baseSwal.fire({
    title: message,
    html: `<p>¿${bodyText} <span class="text-danger fw-bold">${deleteItemName}</span>?</p>`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: "Cancelar",
    reverseButtons: true
  })

  return result.isConfirmed
}