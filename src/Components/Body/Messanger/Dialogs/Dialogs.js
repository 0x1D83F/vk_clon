import React from "react";
import dia from './Dialogs.module.scss';
import arni from "../../../../images/arnold.jfif";
import musk from "../../../../images/musk.jpg_background=000000&cropX1=1339&cropX2=3743&cropY1=554&cropY2=2956";
import carl from "../../../../images/carleone.jfif";
import {NavLink} from "react-router-dom";


export default class Dialogs extends React.Component{

    render() {
        return(
            <div className={dia.wrapper}>
                <div className={dia.dialogs}>
                    <NavLink to="/corr">
                        <div className={dia.avatar}>
                            <img src={arni} alt="аватар"/>
                        </div>
                        <div className={dia.blockInfo}>
                            <div className={dia.head}>
                                <div className={dia.name}>
                                    Arnold schwarzenegger
                                </div>
                                <div className={dia.time}>
                                    9 июля
                                </div>
                            </div>
                            <div className={dia.text}>
                                I'll be back!
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className={dia.dialogs}>
                    <a href="/">
                        <div className={dia.avatar}>
                            <img src={musk} alt="аватар"/>
                        </div>
                        <div className={dia.blockInfo}>
                            <div className={dia.head}>
                                <div className={dia.name}>
                                    Elon Musk
                                </div>
                                <div className={dia.time}>
                                    9 июля
                                </div>
                            </div>
                            <div className={dia.text}>
                                The trampoline is working!
                            </div>
                        </div>
                    </a>
                </div>

                <div className={dia.dialogs}>
                    <a href="/">
                        <div className={dia.avatar}>
                            <img src={carl} alt="аватар"/>
                        </div>
                        <div className={dia.blockInfo}>
                            <div className={dia.head}>
                                <div className={dia.name}>
                                    Vito Corleone
                                </div>
                                <div className={dia.time}>
                                    4 июня
                                </div>
                            </div>
                            <div className={dia.text}>
                                you don't ask with respect, you don't offer friendship, you don't even think to call me Godfather...
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}