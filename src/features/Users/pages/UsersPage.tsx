import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchUsers, deleteUser, openModal } from "../userSlice"
import { Table } from "../../../components/Table"
import { userColumns } from "../helpers/userColumns"
import type { User } from "../user.types"
import { showConfirmDelete, showToast } from "../../../shared/alerts/alert.service"
import { UserModalForm } from "../components/UserModalForm"

const UsersPage = () => {
    const dispatch = useAppDispatch()
    const { items, loading } = useAppSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers())

    }, [dispatch])

    const handleEdit = (user: User) => {
        dispatch(openModal(user))
    }

    const handleDelete = async (user: User) => {
        const confirmed = await showConfirmDelete("Deseas eliminar al usuario", user.name)
        if (confirmed) {
            dispatch(deleteUser(user.id))
                .unwrap()
                .then(() => showToast("Usuario Eliminado"))
                .catch(() => showToast("Error al eliminar usuario", "error"))
        }
    }

    return (
        <div className="container py-3">
            <div className="mb-3">
                <h3>Usuarios</h3>
                <hr className="" />

            </div>
            <button
                className="btn btn-sm btn-warning"
                onClick={() => dispatch(openModal(null))}
            >
                Agregar Nuevo
            </button>

            {loading && <p>Cargando...</p>}

            <Table
                data={items}
                columns={userColumns({
                    onEdit: handleEdit,
                    onDelete: handleDelete
                })}
            />

            <UserModalForm />
        </div>
    )
}

export default UsersPage