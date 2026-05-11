import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/planta.png"
import { CircuitBoard, ClipboardClock, EvCharger, Users } from 'lucide-react'
import { menuItems } from '../config/menu.config'
import { useCan } from '../features/Auth/hooks/useCan'

type Props = {
  collapsed: boolean
}

const Sidebar = ({ collapsed }: Props) => {
  const can = useCan()

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

      <nav>
        <ul className='list-unstyled'>
          {/* <li className='my-3'><Link className="text-decoration-none text-reset" to={"/gensets"}>{collapsed ? <EvCharger className='text-warning'/> : <span className=''><EvCharger className='me-3 text-warning'/> Generadores</span>}</Link></li>
          <li className='my-3'><Link className="text-decoration-none text-reset" to={"/templates"}>{collapsed ? <CircuitBoard className='text-warning'/> : <span className=''><CircuitBoard className='me-3 text-warning'/> Plantillas</span>}</Link></li>
          <li className='my-3'><Link className="text-decoration-none text-reset" to={"/users"}>{collapsed ? <Users className='text-warning'/> : <span className=''><Users className='me-3 text-warning'/> Usuarios</span>}</Link></li>
          <li className='my-3'><Link className="text-decoration-none text-reset" to={"/logs"}>{collapsed ? <ClipboardClock className='text-warning'/> : <span className=''><ClipboardClock className='me-3 text-warning'/> Logs</span>}</Link></li> */}

          {
            menuItems
              .filter(item =>
                can(item.permission)
              )
              .map(item => {
                const Icon = item.icon
                return <li className='my-3'>
                  <Link className="text-decoration-none text-reset"
                    key={item.path}
                    to={item.path}
                  >
                    <Icon className='me-3 text-warning' />
                    {
                      !collapsed &&
                      item.label
                    }
                  </Link>
                </li>
              })
          }
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar