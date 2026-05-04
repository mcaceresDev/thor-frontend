import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchGensets, deleteGenset, openModal } from "../gensetSlice"
import { gensetColumns } from "../helpers/projectColumns"
import type { Genset } from "../genset.types"
import { Table } from "../../../components/Table"
import { GensetModalForm } from "../components/GensetModalForm"
import { showConfirmDelete } from "../../../shared/alerts/alert.service"

const GensetsPage = () => {
  const dispatch = useAppDispatch()

  const { items, loading } = useAppSelector(state => state.gensets)

  useEffect(() => {
    dispatch(fetchGensets())
    console.log(items);

  }, [dispatch])

  const handleEdit = (genset: Genset) => {
    dispatch(openModal(genset))
  }

  const handleDelete = async(genset: Genset) => {
    const confirmed = await showConfirmDelete("Deseas eliminar el proyecto", genset.name)
    if (confirmed) {
      dispatch(deleteGenset(genset.id))
    }
    // if (confirm("¿Eliminar generador?")) {
    //   dispatch(deleteGenset(genset.id))
    // }
  }

  return (
    <div className="container py-3">
      <div className="mb-3">
        <h3>Generadores</h3>
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
        columns={gensetColumns({
          onEdit: handleEdit,
          onDelete: handleDelete
        })}
      />

      <GensetModalForm />
    </div>
  )
}

export default GensetsPage