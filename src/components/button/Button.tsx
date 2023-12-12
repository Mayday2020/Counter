import React from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
}

const Button = (props: ButtonPropsType) => {
    return (
        <div className={s.buttonContainer}>
            <button onClick={props.callBack}>{props.name}</button>
        </div>
    )
}
export default Button