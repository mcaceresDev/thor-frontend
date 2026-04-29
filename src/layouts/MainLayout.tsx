import { Outlet, Link } from 'react-router-dom'
import MainHeader from '../components/MainHeader'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import "./styles/main.css"

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="layout container-fluid p-0">
            <Sidebar collapsed={collapsed} />

            <div className={`main ${collapsed ? "collapsed" : ""}`}>
                <MainHeader onToggle={() => setCollapsed(!collapsed)} />

                <div className="content">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}