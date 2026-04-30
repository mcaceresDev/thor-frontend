import GaugeChart from "../components/GaugeChart"
import TankGauge from "../components/TankChart"
import HeaderGenset from "../components/HeaderGenset"
import GatewayPanel from "../components/GatewayPanel"

export default function MonitoringDashboard() {
    return (
        <div className="container">

            <HeaderGenset />

            <div className="row my-5">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 overflow-scroll">
                    <h3 className="my-3">Gateway Panel</h3>
                    <hr />
                    <GatewayPanel />
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-flex flex-column justify-content-between align-items-center overflow-scroll">
                    <h3 className="my-3">Tanque Combustible</h3>
                    <TankGauge value={65} waveStyle={{ fill: "#ffc107" }} />

                    <div className="mt-3 w-100 text-center">
                        <p className="fw-bold">Capacidad Total: 200Glns</p>
                        <p className="fw-bold">Nivel Actual: 200Glns</p>
                    </div>
                    {/* <p>Nivel Actual   ≈  {capacity * (fuelLevel / 100)}</p> */}
                </div>

            </div>



            <div className="row my-5">
                <h3>Indicadores de Motor</h3>
                <hr />

                <div className="col-12 col-lg-4 p-3 text-center">
                    <h4>Revoluciones</h4>
                    <GaugeChart value={25} name="RPM" />
                </div>


                <div className="col-12 col-lg-4 p-3 text-center">
                    <h4>Temperatura</h4>
                    <GaugeChart value={55} name="°C" max={120} />
                </div>
                
                
                <div className="col-12 col-lg-4 p-3 text-center">
                    <h4>Presión de Aceite</h4>
                    <GaugeChart value={25} name="KPa" max={120} />
                </div>
            </div>


        </div>
    )
}

// "chargeAlternator" data_type: "string", unit: "V" 
// "engine_speed",  unit: "RPM" 
// "engineBattery", unit: "V" 
// "engineStarts",  unit: "Cantidad"
// "engineHours",   unit: "Hours/Min"