import React from 'react';
import h from './Head.module.css';
import HeaderLogo from "./logo/HeaderLogo";
import HeaderSearch from "./search/HeaderSearch";
import HeaderProfile from "./profile/HeaderProfile";
import HeaderAlerts from "./alerts/HeaderAlerts";

class Head extends React.Component{
    render() {
        return(
            <header className={h.elem}>
                <div className={h.container}>
                    <div className={h.items}>
                            <HeaderLogo />
                            <HeaderSearch />
                            <HeaderAlerts />
                            <div className={h.align}>
                                <HeaderProfile  storage={this.props.storage}/>
                            </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Head;