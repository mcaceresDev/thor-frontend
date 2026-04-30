import ReactECharts from "echarts-for-react"

type Props = {
  value: number
  name?: string
  min?: number
  max?: number
}

export default function GaugeChart({
  value,
  name = "Valor",
  min = 0,
  max = 100
}: Props) {
  const option = {
    series: [
      {
        type: "gauge",
        min,
        max,
        progress: {
          show: true,
          width: 10,
          itemStyle: {
            color: "#ffc107"
          }
        },
        title: {
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.5, "#dc3545"], // rojo (0-30%)
              // [0.7, "#0d6efd"], // amarillo (30-70%)
              [1, "#198754"]    // verde (70-100%)
            ]
          }
        },
        axisLabel: {
          color: "#fff"
        },
        axisTick: {
          lineStyle: {
            color: "#999"
          }
        },
        splitLine: {
          lineStyle: {
            color: "#bbb"
          }
        },
        pointer: {
          width: 4,
          itemStyle: {
            color: "#ffc107" // color de la aguja
          }
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}%",
          fontSize: 18,
          color: '#fff'
        },
        data: [
          {
            value,
            name
          }
        ]
      }
    ]
  }

  return <ReactECharts option={option} style={{ height: 350 }} />
}