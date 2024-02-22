import React, {ChangeEvent, useState} from 'react'
import s from "../container/container.module.css";
import Button from "../button/Button";
import {ModeType} from "../container/ContainerComponent";

type SettingsComponentPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    setCount: (value: number) => void
    setSettingsMode: (value: ModeType) => void
    settingsMode: ModeType
}

const SettingsComponent = (props: SettingsComponentPropsType) => {
    let [maxV, setMaxV] = useState(props.maxValue)
    let [minV, setMinV] = useState(props.minValue)
    const onChangeMaxV = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxV(+e.target.value)
    }
    const onChangeMinV = (e: ChangeEvent<HTMLInputElement>) => {
        setMinV(+e.target.value)
    }
    const setValues = () => {
        props.setMaxValue(maxV)
        props.setMinValue(minV)
        props.setCount(minV)
        props.setSettingsMode('start')
    }

    if (minV === props.minValue && maxV === props.maxValue) {
        props.setSettingsMode('start')
    } else if (minV < 0 || minV >= maxV) {
        props.setSettingsMode('incorrect')
    } else {
        props.setSettingsMode('settings')
    }

    return (
        <div className={s.container}>
            <div className={s.miniContainer}>
                <div className={s.value}>
                    <div>max value:</div>
                    <div>
                        <input
                            className={props.settingsMode === 'incorrect' ? s.incorrectValue : s.correctValue}
                            placeholder={'maxV'}
                            value={maxV}
                            type={'number'}
                            onChange={(e) => onChangeMaxV(e)}
                        />
                    </div>
                </div>
                <div className={s.value}>
                    <div>start value:</div>
                    <div>
                        <input
                            className={props.settingsMode === 'incorrect' ? s.incorrectValue : s.correctValue}
                            placeholder={'minV'}
                            value={minV}
                            type={'number'}
                            onChange={(e) => onChangeMinV(e)}
                        />
                    </div>
                </div>
            </div>
            <div className={s.miniContainer}>
                <Button name={'Set'}
                        callBack={setValues}
                        disabled={props.settingsMode !== 'settings'}/>
            </div>
        </div>
    )
}
export default SettingsComponent