import React from 'react'
import s from "../container/container.module.css";
import Button from "../button/Button";

const SettingsComponent = () => {
    return (
        <div className={s.container}>
            <div className={s.miniContainer}>
                <div className={s.value}>
                    <div>max value:</div>
                    <div>
                        <input placeholder={'maxV'}/>
                    </div>
                </div>
                <div className={s.value}>
                    <div>min value:</div>
                    <div>
                        <input placeholder={'minV'}/>
                    </div>
                </div>
            </div>
            <div className={s.miniContainer}>
                <Button name={'Set'} callBack={() => {}}/>
            </div>
        </div>
    )
}
export default SettingsComponent