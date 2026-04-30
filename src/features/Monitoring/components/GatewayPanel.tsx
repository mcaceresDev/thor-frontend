import React from 'react'
import offButton from "../../../assets/img/btnStop.svg"
import manualButton from "../../../assets/img/btnManual.svg"
import poleButton from "../../../assets/img/btnTest.svg"
import powerButton from "../../../assets/img/btnGo.svg"
import autoButton from "../../../assets/img/btnAuto.svg"
import offButto from "../../../assets/img/btnStop.svg"


import torre from "../../../assets/img/torre.svg"
// LUCIDE ICONS
import { Building2, Circle, MegaphoneOff, Minus, Pointer, Power, PowerOff, UtilityPole } from 'lucide-react'
import GenPanel from './Line'

const GatewayPanel = () => {
  return (
    <div className='row'>
        <GenPanel />

        <div className="col-6 my-3 w-100 d-flex justify-content-between align-items-center">
            <div className="p-2 bg-danger rounded-circle"><Circle /> </div>
            <div className="p-2 text-dark bg-warning rounded-circle"><Pointer /></div>
            {/* <div className="p-2 text-dark bg-warning rounded-circle"><UtilityPole /></div> */}
            <div className="p-2 text-dark bg-warning rounded-circle"><img src={poleButton} style={{height: "25px"}} alt="" /></div>
            <div className="p-2 text-dark bg-warning rounded-circle">AUTO</div>
            <div className="p-2 text-dark bg-warning rounded-circle"><MegaphoneOff /></div>
            <div className="p-2 bg-success rounded-circle"><img src={powerButton} style={{height: "30px"}} alt="" /></div>
        </div>

        <div className='col-6'>
            <div className='bg-warning'>
                {/* <img src={} alt="" /> */}
            </div>
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
{/* <Circle color="#ffffff" /> */}