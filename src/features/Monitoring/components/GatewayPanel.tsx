import React from 'react'
// ICONOS SVG
import OffButton from "../../../assets/img/empty-circle.svg?react"
import OnButton from "../../../assets/img/bar.svg?react"
import ManualButton from "../../../assets/img/btnManual.svg?react"
import LightPoleButton from "../../../assets/img/btnTest.svg?react"
import AutoButton from "../../../assets/img/btnAuto.svg?react"
import SilentButton from "../../../assets/img/megaphone-off.svg?react"
// MUI ICONS
import { Fab, SvgIcon } from '@mui/material'
import "../styles/gatewayPanel.css"


import torre from "../../../assets/img/torre.svg"
// LUCIDE ICONS
import { Building2, Circle, MegaphoneOff, Minus, Pointer, Power, PowerOff, UtilityPole } from 'lucide-react'
import GenPanel from './Line'

const GatewayPanel = () => {
    return (
        <div className='row panelContainer'>
            <GenPanel />

            {/* style={{ backgroundColor: 'red' }} */}
            {/* <OffButton style={{ color: isActive ? "lime" : "white" }} /> */}
            <div className="col-6 my-3 w-100 d-flex justify-content-between align-items-center">
                <Fab className='p-2 bg-danger'>
                    <OffButton style={{ fill: 'white' }} width={40} height={40} />
                </Fab>
                <Fab className='p-2 bg-warning'>
                    <ManualButton style={{ marginLeft: 5 }} />
                </Fab>
                <Fab className='p-2 bg-warning'>
                    <LightPoleButton />
                </Fab>
                <Fab className='p-2 bg-warning'>
                    <AutoButton />
                </Fab>
                <Fab className='p-2 bg-warning'>
                    <SilentButton />
                </Fab>
                <Fab className='px-2 bg-success'>
                    <OnButton style={{ fill: 'white' }} height={40}/>
                </Fab>
            </div>

        </div>
    )
}

export default GatewayPanel



{/* <BellRing color="#ffffff" />
<BellOff color="#ffffff" />
<PointerOff color="#ffffff" />
<MegaphoneOff color="#ffffff" />
<Megaphone color="#ffffff" /> */}
{/* <Circle color="#ffffff" /> */ }