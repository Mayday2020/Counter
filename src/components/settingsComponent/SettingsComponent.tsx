import React, {ChangeEvent, useState} from 'react'
import s from "../container/container.module.css";
import Button from "../button/Button";
import {ModeType} from "../container/ContainerComponent";

type SettingsComponentPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number)=> void
    setMaxValue: (value: number)=> void
    setCount: (value: number)=> void
    changeSettingsMode: (value: ModeType)=> void
    settingsMode: ModeType
}

const SettingsComponent = (props: SettingsComponentPropsType) => {
    let [maxV, setMaxV] = useState(props.maxValue)
    let [minV, setMinV] = useState(props.minValue)

    const onChangeMaxV = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeSettingsMode('settings')
        const value = +e.target.value
        setMaxV(value)
    }
    const onChangeMinV = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeSettingsMode('settings')
        const value = +e.target.value
        setMinV(value)
    }
    const setValues = () => {
        props.setMaxValue(maxV)
        props.setMinValue(minV)
        props.setCount(minV)
        props.changeSettingsMode('correct')
    }

    return (
        <div className={s.container}>
            <div className={s.miniContainer}>
                <div className={s.value}>
                    <div>max value:</div>
                    <div>
                        <input
                            className={maxV < minV || maxV < 0 ? s.incorrectValue : s.correctValue}
                            placeholder={'maxV'}
                            value={maxV}
                            onChange={(e) => onChangeMaxV(e)}
                        />
                    </div>
                </div>
                <div className={s.value}>
                    <div>start value:</div>
                    <div>
                        <input
                            className={ props.settingsMode === 'incorrect' ? s.incorrectValue : s.correctValue}
                            placeholder={'minV'}
                            value={minV}
                            onChange={(e) => onChangeMinV(e)}
                        />
                    </div>
                </div>
            </div>
            <div className={s.miniContainer}>
                <Button name={'Set'} callBack={setValues} disabled={maxV < minV}/>
            </div>
        </div>
    )
}
export default SettingsComponent