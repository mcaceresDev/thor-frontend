import React, { useState } from 'react'
import { Bell, ChevronDown, Menu, SquareMenu, User, LogOut, Cog } from 'lucide-react'
import "./styles/header.css"
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { logoutThunk } from '../features/Auth/authSlice'

type Props = {
  onToggle: () => void
}

const MainHeader = ({ onToggle }: Props) => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const user = useAppSelector(state => state.auth.user)

  const [open, setOpen] = useState(false)
  const [openNotif, setOpenNotif] = useState(false)

  const handleLogout = async () => {

    try {

      await dispatch(
        logoutThunk()
      ).unwrap()

      navigate("/login")

    } catch (error) {

      console.log(error)
    }
  }

  return (
    <header className="header d-flex justify-content-between">
      <button className='btn btn-sm btn-outline-warning' onClick={onToggle}><Menu /></button>
      <div className='user-section'>

        <div className="dropdown">

          <button
            className="icon-button text-light"
            data-bs-toggle="dropdown"
            onClick={() => { setOpen(false); setOpenNotif(!openNotif) }}
          >
            <span><User  className='text-light'/> {user?.username}</span>
            <ChevronDown className='text-light'/>
          </button>

          {openNotif && (
            <ul className="dropdown-menu-custom sesion-menu list-group list-group-flush px-2 py-3">

              <li className=''>
                <Cog /> Configurar cuenta
              </li>
              <hr className='my-2' />
              <button className='btn btn-sm btn-outline-danger' onClick={handleLogout}>Salir</button>
            </ul>
          )}

        </div>
      </div>
    </header>
  )
}

export default MainHeader