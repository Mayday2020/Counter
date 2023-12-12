import React from 'react'
import s from './container.module.css'
import SettingsComponent from "../settingsComponent/SettingsComponent";
import UIComponent from "../UIComponent";

const ContainerComponent = () => {

    return (
        <div className={s.main}>
            <SettingsComponent />
            <UIComponent />
        </div>

    )
}
export default ContainerComponent