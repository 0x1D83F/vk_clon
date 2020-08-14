import React from "react";
import mess from './Messanger.module.scss';

import s_logo from './../../#Head/search/img/buscar.svg';
import musk from '../../../images/musk.jpg_background=000000&cropX1=1339&cropX2=3743&cropY1=554&cropY2=2956';
import arni from '../../../images/arnold.jfif';
import carl from '../../../images/carleone.jfif';
import Dialogs from "./Dialogs/Dialogs";
import MessangerSearch from "./Search/MessangerSearch";


class Messanger extends React.Component {


    render() {
        return (
            <div className={mess.wrapper}>
                <MessangerSearch  />

                <div className={mess.line}></div>

                <Dialogs />

            </div>

        )
    }
}

export default Messanger;