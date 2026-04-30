import React from 'react'
import { Building2, Factory } from 'lucide-react';
import poleIcon from "../../../assets/img/torre-electrica2.svg"
import thunderIcon from "../../../assets/img/energia-renovable.svg"
import building from "../../../assets/img/edificio.svg"
import GensetButton from "../../../assets/img/tilde.svg?react"
import EdificioIcon from "../../../assets/img/edificio.svg?react"
import TowerButton from "../../../assets/img/torre-electrica2.svg?react"
import { Fab, SvgIcon } from '@mui/material';

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

// min width 540
// max width 950
const GenPanel = () => {
    return (
        <div className="d-flex flex-column my-4">
            
            <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <p className='text-start'>Comercial</p>
                    <Fab className='p-2 bg-warning'>
                        <TowerButton width={60} height={60} />
                    </Fab>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <p className='text-start'>Generador</p>
                    <Fab className='p-2 bg-warning'>
                        <GensetButton width={60} height={60} />
                    </Fab>
                </div>
            </div>

            <div className='w-100 d-flex align-items-center'>
                <CircleStatus status={false} />
                <Line />
                <CircleStatus status={false} />
                <Line />

                <SvgIcon style={{ fontSize: 64 }}>
                    <EdificioIcon />
                </SvgIcon>

                <Line />
                <CircleStatus status={false} />
                <Line />
                <CircleStatus status={false} />
            </div>
        </div>
    )
}

export default GenPanel