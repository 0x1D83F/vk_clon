import React from 'react';
import hl from './HeaderLogo.module.css';
import logo from './img/logo.svg'

class HeaderLogo extends React.Component{
    render() {
        return (
                <div className={hl.logo}>
                    <a href="/" className={hl.logo_click}>
                        <img src={logo} alt=""/>
                    </a>
                </div>
        )
    }
}

export default HeaderLogo;