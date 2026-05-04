import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/planta.png"
import { ClipboardClock, EvCharger, Users } from 'lucide-react'

type Props = {
  collapsed: boolean
}

const Sidebar = ({ collapsed }: Props) => {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""} border-end border-dark`}>
      {
        collapsed ?
          <div className='d-flex justify-content-between align-items-center'>
              <img className='logo-sidebar' src={logo} alt="" />
          </div>
          :
          <h4 className="text-center text-warning">Thor System</h4>
      }

      <hr />
      {/* <h4 className="text-center">{collapsed ? "⚡" : "Thor System"}</h4> */}

      <nav>
        <ul className='list-unstyled'>
          <li className='my-3'><Link className="text-decoration-none text-reset" to={"/gensets"}>{collapsed ? <EvCharger className='text-warning'/> : <span className=''><EvCharger className='me-3 text-warning'/> Generadores</span>}</Link></li>
          <li className='my-3'><Link className="text-decoration-none text-reset" to={"/users"}>{collapsed ? <Users className='text-warning'/> : <span className=''><Users className='me-3 text-warning'/> Usuarios</span>}</Link></li>
          <li className='my-3'><Link className="text-decoration-none text-reset" to={"/logs"}>{collapsed ? <ClipboardClock className='text-warning'/> : <span className=''><ClipboardClock className='me-3 text-warning'/> Logs</span>}</Link></li>
        </ul>
        {/* <a href="/genset/1">⚙️ {!collapsed && "Gensets"}</a>
        <a href="#">📊 {!collapsed && "Dashboard"}</a> */}
      </nav>
    </aside>
  )
}

export default Sidebar