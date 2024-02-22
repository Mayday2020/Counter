import React from 'react'
import s from "./container/container.module.css";
import Button from "./button/Button";
import {ModeType} from "./container/ContainerComponent";

type UIComponentPropsType = {
    count: number
    setCount: (num: number) => void
    maxValue: number
    minValue: number
    settingsMode: ModeType
}

const UIComponent = (props: UIComponentPropsType) => {
    const countInc = () => {
        if (props.count < props.maxValue) {
            props.setCount(props.count + 1)
        }
    }
    const countReset = () => {
        props.setCount(props.minValue)
    }
    let content: number | string = props.count
    if (props.settingsMode === 'incorrect') {
        content = 'Incorrect values'
    } else if (props.settingsMode === 'start') {
        content = props.count
    } else if (props.settingsMode === 'settings') {
        content = 'Press SET to continue'
    }
    return (
        <div className={s.container}>
            <div className={s.miniContainer}>
                <h1 className={props.count === props.maxValue && props.settingsMode === 'start'
                || props.settingsMode === 'incorrect'
                    ? s.maxValue : s.value}>
                    {
                        content
                    }
                </h1>
            </div>
            <div className={s.miniContainer}>
                <div className={s.flexRowContainer}>
                    <Button
                        name={'Inc'}
                        callBack={countInc}
                        disabled={props.count === props.maxValue ||
                        props.settingsMode === 'incorrect' ||
                        props.settingsMode === 'settings'}/>
                    <Button
                        name={'Reset'}
                        callBack={countReset}
                        disabled={props.count === props.minValue ||
                        props.settingsMode === 'incorrect' ||
                        props.settingsMode === 'settings'}/>
                </div>
            </div>
        </div>
    )
}
export default UIComponent