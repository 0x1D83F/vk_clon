import React from 'react';
import sd from './ShowDialog.module.scss';
import Dialog_menu from "./Menu/Menu";
import Dialog_body from "./Body/Body";
import Dialog_input from "./Input/Input";



class ShowDialog extends React.Component{
    render(){
        return(
            <div className={sd.wrapper}>
                <div className={sd.main_side}>
                    <Dialog_menu />
                    <Dialog_body storage={this.props.storage} />
                    <Dialog_input storage={this.props.storage} />
                </div>
                <div className={sd.sidebar}></div>
            </div>
        )
    }
}

export default ShowDialog;