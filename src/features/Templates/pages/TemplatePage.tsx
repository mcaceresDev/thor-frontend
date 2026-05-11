import React from 'react'

const TemplatePage = () => {
  return (
    <div className="container py-3">
          <div className="mb-3">
            <h3>Plantillas</h3>
            <hr className="" />
    
          </div>
          <button
            className="btn btn-sm btn-warning"
            // onClick={() => dispatch(openModal(null))}
          >
            Agregar Nuevo
          </button>
    
          {/* {loading && <p>Cargando...</p>} */}
    
          {/* <Table
            data={items}
            columns={gensetColumns({
              onEdit: handleEdit,
              onDelete: handleDelete
            })}
          />
    
          <GensetModalForm /> */}
        </div>
  )
}

export default TemplatePage