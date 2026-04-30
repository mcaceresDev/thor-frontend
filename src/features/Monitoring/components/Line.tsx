import React from 'react'
import { Building2, Factory } from 'lucide-react';
import poleIcon from "../../../assets/img/torre-electrica2.svg"
import thunderIcon from "../../../assets/img/energia-renovable.svg"
import building from "../../../assets/img/edificio.svg"

export const Line: React.FC<{ width?: number }> = (props) => {
    const { width } = props;
    return (
        <div style={{
            width: width || 200,
            height: 5,
            background: 'white',
            borderRadius: 2,
            margin: '0 5px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
        }}></div>
    );
}

export const CircleStatus: React.FC<{ status: boolean }> = (props) => {
    const { status } = props;

    return (
        <div style={{
            borderRadius: '50%',
            maxWidth: 16,
            maxHeight: 16,
            width: '100%',
            height: '100%',
            background: status ? '#76ff03' : '#464D5D',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
        }}></div>
    );
}


const GenPanel = () => {
    return (
        <div className="d-flex flex-column my-4">
            <div className='d-flex justify-content-between'>
                <div className="rounded-circle p-2 bg-warning text-dark">
                    <img src={poleIcon} alt="" style={{height: "50px"}}/>
                </div>
                <div className="rounded-circle p-2 bg-warning text-dark">
                    <img src={thunderIcon} alt="" style={{height: "50px"}}/>
                </div>
            </div>

            <div className='w-100 d-flex align-items-center'>
                <CircleStatus status={false} />
                <Line />
                <CircleStatus status={false} />
                <Line />
                {/* <Building2 size={80}/> */}
                {/* <Factory size={80} /> */}
                <img src={building} alt="" style={{height: "50px"}}/>

                <Line />
                <CircleStatus status={false} />
                <Line />
                <CircleStatus status={false} />
            </div>
        </div>
    )
}

export default GenPanel