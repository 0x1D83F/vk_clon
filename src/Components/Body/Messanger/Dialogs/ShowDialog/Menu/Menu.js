import React from 'react';
import sd from "./Menu.module.scss";
import back from "../../../../../../images/back.svg";
import arnold from "../../../../../../images/arnold.jfif";
import {NavLink } from "react-router-dom";

class Dialog_menu extends React.Component{
    render(){
        return(
            <div className={sd.menu}>
                <div className={sd.back}>
                    <NavLink to="/im">
                        <div className={sd.arrow}>
                            <img src={back} alt="backArrow" />
                        </div>
                        <div className={sd.arrow_text}>
                            Назад
                        </div>
                    </NavLink>
                </div>
                <div className={sd.main}>
                    <div className={sd.user_name}>
                        <a href="/">
                            Arnold Arnold
                        </a>
                    </div>
                    <div className={sd.last_date}>
                        был в сети 25 июл в 21:12
                    </div>
                </div>
                <div className={sd.user_logo}>
                    <a href="/">
                        <div className={sd.circle}>
                            <img src={arnold} alt="arnold"/>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Dialog_menu;