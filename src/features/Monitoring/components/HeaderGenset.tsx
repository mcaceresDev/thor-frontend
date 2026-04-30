import React from 'react'

const HeaderGenset = () => {
    return (
        <div>
            <h2>DC-SANTA-MARIA</h2>
            <p className="fw-bold">WACKER G120</p>
            <hr />

            <div className='w-100 my-4 row'>
                <div className='col-6'>
                    <h5>Inicios de motor</h5>
                    <h3>320</h3>
                </div>
                <div className='col-6'>
                    <h5>Horas de uso</h5>
                    <h3>6 Horas 23 Minutos</h3>
                </div>
            </div>
        </div>
    )
}

export default HeaderGenset