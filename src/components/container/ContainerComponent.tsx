import React, {useState} from 'react'
import s from './container.module.css'
import SettingsComponent from "../settingsComponent/SettingsComponent";
import UIComponent from "../UIComponent";

export type ModeType = 'incorrect' | 'settings' | 'start'

const ContainerComponent = () => {

    let [maxValue, setMaxValue] = useState(3)
    let [minValue, setMinValue] = useState(1)
    let [count, setCount] = useState(minValue)
    let [settingsMode, setSettingsMode] = useState<ModeType>('start')


    console.log(maxValue, minValue, settingsMode)
    return (
        <div className={s.main}>
            <SettingsComponent
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                setCount={setCount}
                setSettingsMode={setSettingsMode}
                settingsMode={settingsMode}
            />
            <UIComponent
                count={count}
                setCount={setCount}
                maxValue={maxValue}
                minValue={minValue}
                settingsMode={settingsMode}
            />
        </div>

    )
}
export default ContainerComponent