import React, {useState} from 'react'
import s from './container.module.css'
import SettingsComponent from "../settingsComponent/SettingsComponent";
import UIComponent from "../UIComponent";

export type ModeType = 'correct' | 'incorrect' | 'settings'

const ContainerComponent = () => {

    let [maxValue, setMaxValue] = useState(5)
    let [minValue, setMinValue] = useState(1)
    let [count, setCount] = useState(minValue)
    let [settingsMode, setSettingsMode] = useState<ModeType>('correct')

    const counting = (num: number) => {
        setCount(num)
    }
    const changeMinV = (num: number) => {
        setMinValue(num)
    }
    const changeMaxV = (num: number) => {
        setMaxValue(num)
    }
    const changeSettingsMode = (value: ModeType) => {
        setSettingsMode(value)
    }

    return (
        <div className={s.main}>
            <SettingsComponent
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={changeMinV}
                setMaxValue={changeMaxV}
                setCount={counting}
                changeSettingsMode={changeSettingsMode}
                settingsMode={settingsMode}
            />
            <UIComponent
                count={count}
                changeCount={counting}
                maxValue={maxValue}
                minValue={minValue}
                settings={settingsMode}
            />
        </div>

    )
}
export default ContainerComponent