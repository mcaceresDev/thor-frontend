import React from 'react'
import logo from '../../../assets/img/planta.png'
import '../styles/login.css'

const LoginPage = () => {
    return (
        <div className='main-container container-fluid vh-100 pt-4 d-flex flex-column align-items-center justify-content-center'>
            <div className='login-container p-3 border border-dark rounded'>

                <div className='my-3 d-flex flex-column justify-content-center align-items-center'>
                    <img className='logo' src={logo} alt="" />
                    <h2 className='text-light fw-bold my-3'>Thor System</h2>
                </div>

                <form >{/* onSubmit={handleSubmit(onSubmit)} */}

                    <div className="mb-4">
                        <label htmlFor="" className="text-warning form-label">Usuario</label>
                        <input
                            className="input-transparent form-control form-control-sm mb-2"
                        // {...register("name")}
                        // placeholder="Nombre"
                        />
                        {/* {errors.name && <small>{errors.name.message}</small>} */}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="text-warning form-label">Contraseña</label>
                        <input type='password'
                            className="input-transparent form-control form-control-sm mb-2"
                        // {...register("tecnologies")}
                        />
                    </div>

                    <div className="d-flex w-100">
                        <button className="w-100 btn btn-sm btn-outline-warning mx-auto">
                            {/* {isEdit ? "Actualizar" : "Guardar"} */}
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
