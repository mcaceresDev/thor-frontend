// Para convertir array en objetos independientes
export const mapMetrics = (metrics: any[]) => {
    return metrics.reduce((acc, m) => {
        acc[m.key_name] = m.value
        return acc
    }, {} as Record<string, number | null>)
}

// Convertir campo engineHours a formato legible
export const genEngineHours = (totalMinutes:number) => {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    return `${hours}h ${minutes}m`
}