import React from 'react'
import s from "./container/container.module.css";
import Button from "./button/Button";
import {ModeType} from "./container/ContainerComponent";

type UIComponentPropsType = {
    count: number
    changeCount: (num: number) => void
    maxValue: number
    minValue: number
    settings: ModeType
}

const UIComponent = (props: UIComponentPropsType) => {
    const countInc = () => {
        if (props.count < props.maxValue) {
            props.changeCount(props.count + 1)
        }
    }
    const countReset = () => {
        props.changeCount(props.minValue)
    }
    let content: number | string = props.count
    if (props.settings === 'incorrect'){
        content = 'Incorrect values'
    } else if (props.settings === 'correct') {
        content = props.count
    } else if (props.settings === 'settings') {
        content = 'Press SET to continue'
    }
    return (
        <div className={s.container}>
            <div className={s.miniContainer}>
                <h1 className={props.count === props.maxValue || props.settings === 'incorrect' ? s.maxValue : s.value}>
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
                        disabled={props.count === props.maxValue || props.settings !== 'correct'}/>
                    <Button
                        name={'Reset'}
                        callBack={countReset}
                        disabled={props.count === props.minValue || props.settings !== 'correct'}/>
                </div>
            </div>
        </div>
    )
}
export default UIComponent