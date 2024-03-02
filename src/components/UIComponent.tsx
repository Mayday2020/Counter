import React, {useEffect, useState} from 'react'
import s from "./container/container.module.css";
import Button from "./button/Button";
import {ModeType} from "./container/ContainerComponent";

type UIComponentPropsType = {
    maxValue: number
    minValue: number
    settingsMode: ModeType
}

const UIComponent = (props: UIComponentPropsType) => {

    let [count, setCount] = useState<number>(0)

    useEffect(() => {
        setCount(props.minValue)
    }, [props.minValue, props.maxValue])

    const countInc = () => {
        if (count < props.maxValue) {
            setCount(count + 1)
        }
    }
    const countReset = () => {
        setCount(props.minValue)
    }

    let content: number | string = count
    if (props.settingsMode === 'incorrect') {
        content = 'Incorrect values'
    } else if (props.settingsMode === 'start') {
        content = count
    } else if (props.settingsMode === 'settings') {
        content = 'Press SET to continue'
    }

    return (
        <div className={s.container}>
            <div className={s.miniContainer}>
                <h1 className={count === props.maxValue && props.settingsMode === 'start'
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
                        disabled={count === props.maxValue ||
                        props.settingsMode === 'incorrect' ||
                        props.settingsMode === 'settings'}/>
                    <Button
                        name={'Reset'}
                        callBack={countReset}
                        disabled={count === props.minValue ||
                        props.settingsMode === 'incorrect' ||
                        props.settingsMode === 'settings'}/>
                </div>
            </div>
        </div>
    )
}
export default UIComponent