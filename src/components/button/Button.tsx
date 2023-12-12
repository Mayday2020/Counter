import React from 'react'

type ButtonPropsType = {
    name: string
    callBack: () => void
}

const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button onClick={props.callBack}>{props.name}</button>
        </div>
    )
}
export default Button