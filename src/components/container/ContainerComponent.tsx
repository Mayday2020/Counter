import React, {useEffect, useState} from 'react'
import s from './container.module.css'
import SettingsComponent from "../settingsComponent/SettingsComponent";
import UIComponent from "../UIComponent";

export type ModeType = 'incorrect' | 'settings' | 'start'

const ContainerComponent = () => {

    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(1)

    useEffect( () => {
        let maxV = localStorage.getItem('maxV')
        if (maxV) {
            setMaxValue(JSON.parse(maxV))
        }
        let minV = localStorage.getItem('minV')
        if (minV) {
            setMinValue(JSON.parse(minV))
        }
    }, [])

    let [settingsMode, setSettingsMode] = useState<ModeType>('start')

    console.log(maxValue, minValue, settingsMode)
    return (
        <div className={s.main}>
            <SettingsComponent
                maxValue={maxValue}
                minValue={minValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                setSettingsMode={setSettingsMode}
                settingsMode={settingsMode}
            />
            <UIComponent
                maxValue={maxValue}
                minValue={minValue}
                settingsMode={settingsMode}
            />
        </div>

    )
}
export default ContainerComponent