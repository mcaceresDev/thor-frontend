import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchDashboard } from "../dashboardSlice"
// COMPONENTS
import GaugeChart from "../components/GaugeChart"
import TankGauge from "../components/TankChart"
import GatewayPanel from "../components/GatewayPanel"
import { useParams } from "react-router-dom"
// HELPERS
import { mapMetrics, genEngineHours } from "../helpers/monitoringHelper"

export default function MonitoringDashboard() {
    const dispatch = useAppDispatch()
    const { data } = useAppSelector((state) => state.dashboard)

    const { generatorId } = useParams()

    useEffect(() => {
        if (!generatorId) return

        dispatch(fetchDashboard(Number(generatorId)))

        const interval = setInterval(() => {
            dispatch(fetchDashboard(Number(generatorId)))
        }, 5000)

        return () => clearInterval(interval)
    }, [dispatch, generatorId])

    if (!data) return <p>Cargando...</p>

    const { generator, metrics } = data
    const metricsMap = mapMetrics(metrics)

    // métricas
    const fuelLevel = metricsMap.fuelLevel ?? 0
    const rpm = metricsMap.engine_speed ?? 0
    const temp = metricsMap.coolantTemperature ?? 0
    const oil = metricsMap.oilPressure ?? 0
    const engineStarts = metricsMap.engineStarts ?? 0
    const engineHours = metricsMap.engineHours ?? 0
    
    let parsedHours = genEngineHours(engineHours)

    // generador
    const capacity = generator.capacity ?? 0
    const unit = generator.unit_capacity ?? ""

    const currentFuel =
        capacity && fuelLevel
            ? capacity * (fuelLevel / 100)
            : 0

    console.log(data);


    return (
        <div className="container">

            <div>
                <h2>{generator.name}</h2>
                <p className="fw-bold">{generator.brand}</p>
                <hr />

                <div className='w-100 my-4 row'>
                    <div className='col-6'>
                        <h5>Inicios de motor</h5>
                        <h3>{engineStarts}</h3>
                    </div>
                    <div className='col-6'>
                        <h5>Horas de uso</h5>
                        <h3>{parsedHours}</h3>
                    </div>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 overflow-scroll">
                    <h3 className="my-3">Gateway Panel</h3>
                    <hr />
                    <GatewayPanel />
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-flex flex-column justify-content-between align-items-center overflow-scroll">
                    <h3 className="my-3">Tanque Combustible</h3>
                    <TankGauge value={fuelLevel} waveStyle={{ fill: "#ffc107" }} />

                    <div className="mt-3 w-100 text-center">
                        <p className="fw-bold">Capacidad Total: {capacity} {unit}</p>
                        <p className="fw-bold">Nivel Actual: {currentFuel.toFixed(2)}</p>
                        <p>Nivel Actual (%) ≈ {fuelLevel}%</p>
                    </div>
                </div>

            </div>



            <div className="row my-5">
                <h3>Indicadores de Motor</h3>
                <hr />

                <div className="col-12 col-lg-4 p-3 text-center">
                    <h4>Revoluciones</h4>
                    <GaugeChart value={rpm} name="RPM" />
                </div>


                <div className="col-12 col-lg-4 p-3 text-center">
                    <h4>Temperatura</h4>
                    <GaugeChart value={temp} name="°C" max={120} />
                </div>


                <div className="col-12 col-lg-4 p-3 text-center">
                    <h4>Presión de Aceite</h4>
                    <GaugeChart value={oil} name="KPa" max={120} />
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