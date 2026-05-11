import React from 'react'
import logo from '../../../assets/img/planta.png'
import '../styles/login.css'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
    loginSchema,
    type LoginFormData
} from '../auth.schema'

import { useAppDispatch } from '../../../app/hooks'

import {
    loginThunk
} from '../authSlice'

const LoginPage = () => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = async (
        data: LoginFormData
    ) => {

        try {

            await dispatch(
                loginThunk(data)
            ).unwrap()

            navigate("/gensets")

        } catch (error: any) {

            console.log(error)
        }
    }

    return (
        <div className='main-container container-fluid vh-100 pt-4 d-flex flex-column align-items-center justify-content-center'>
            <div className='login-container p-3 border border-dark rounded'>

                <div className='my-3 d-flex flex-column justify-content-center align-items-center'>
                    <img className='logo' src={logo} alt="" />
                    <h2 className='text-warning fw-bold my-3'>Thor System</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="mb-4">
                        <label htmlFor="" className="text-warning form-label">Usuario</label>
                        <input className="input-transparent form-control form-control-sm mb-2"
                        {...register("username")} />
                        {errors.username && (
                            <small className='text-danger'>
                                {errors.username.message}
                            </small>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="text-warning form-label">Contraseña</label>
                        <input type='password'
                            className="input-transparent form-control form-control-sm mb-2"
                            {...register("password")}
                        />
                        {errors.password && (
                            <small className='text-danger'>
                                {errors.password.message}
                            </small>
                        )}
                    </div>

                    <div className="d-flex w-100">
                        <button type='submit' className="w-100 btn btn-sm btn-outline-warning mx-auto">
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
