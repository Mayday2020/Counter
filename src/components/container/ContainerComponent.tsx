import React from 'react'
import s from './container.module.css'
import Button from "../button/Button";

const ContainerComponent = () => {
    return (
        <div className={s.container}>
            <div>
                <Button name={'Set'} callBack={() => {}}/>
            </div>
        </div>
    )
}
export default ContainerComponent