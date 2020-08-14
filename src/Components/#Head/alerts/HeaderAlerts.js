import React from 'react';
import ha from './HeaderAlerts.module.css';
import alert_logo from './img/bell.svg';

class HeaderAlerts extends React.Component{
    render() {
        return(
            <div className={ha.wrapp}>
                <div className={ha.img}>
                    <img src={alert_logo} alt=""/>
                </div>
            </div>
        )
    }
}
export default HeaderAlerts;