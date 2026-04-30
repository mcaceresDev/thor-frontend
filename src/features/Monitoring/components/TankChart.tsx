import LiquidFillGauge from "react-liquid-gauge"

type Props = {
    value: number // 0 - 100
    waveStyle: string
}

export default function TankGauge({ value, waveStyle }: Props) {
    return (
        <div style={{ width: 250, height: 250 }}>
            <LiquidFillGauge
                value={value}
                width={250}
                height={250}
                percent="%"
                textSize={1}
                textOffsetX={0}
                textOffsetY={0}
                riseAnimation
                waveAnimation
                waveFrequency={2}
                waveAmplitude={1}
                gradient
                circleStyle={waveStyle}
                waveStyle={waveStyle}
                // waveStyle={{
                //   fill: "#108ee9"
                // }}
                textStyle={{
                    fill: "#000",
                    fontSize: "1.2rem"
                }}
                waveTextStyle={{
                    fill: '#000',
                    fontFamily: 'Arial'
                }}
            />
        </div>
    )
}