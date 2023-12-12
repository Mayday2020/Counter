import React from 'react'
import s from "./container/container.module.css";
import Button from "./button/Button";

const UIComponent = () => {
    return (
        <div className={s.container}>
            <div className={s.miniContainer}>
                <h1>0</h1>
            </div>
            <div className={s.miniContainer}>
                <div className={s.flexRowContainer}>
                    <Button name={'Inc'} callBack={() => {}}/>
                    <Button name={'Reset'} callBack={() => {}}/>
                </div>
            </div>
        </div>
    )
}
export default UIComponent