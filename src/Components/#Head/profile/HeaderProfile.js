import React from 'react';
import hp from "./HeaderProfile.module.css";
import logo from '../../../images/IMG_9397-1-3--.jpg';
import {NavLink } from 'react-router-dom';



class HeaderProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            opacity: '0',
            visibility: 'hidden',
            fill: '#94B8E4',
            animation: 'non-animated'
        }
    }
    dropper = () => {
        let finder = this.state.opacity;
        let find = this.state.visibility;
        if(finder === '0' && find === 'hidden'){
            this.setState({
                opacity: '1',
                visibility: 'visible',
                fill: '#fff',
                animation: 'translateY(7%)'
            })
        } else {
            this.setState({
                opacity: '0',
                visibility: 'hidden',
                fill: '#94B8E4',
                animation: 'translateY(20%)'
            })
        }
    }
    render() {
        let status = {
            opacity: this.state.opacity,
            visibility: this.state.visibility,
            transform: this.state.animation
        }
        let svgStyle = {fill: this.state.fill}

        return (
            <div className={hp.profile} onClick={this.dropper}>
                <div className={hp.items} >
                    <div className={hp.name}>{this.props.storage.main[0].name.split(' ')[0]}</div>
                    <div className={hp.img}>
                        <div className={hp.circle}>
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                    <div className={hp.arrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="color"  height="8px" viewBox="0 0 24 24" width="8px" className="hovered-paths"><g><path d="m23.762 13.702-11.25-10.5c-.288-.27-.735-.27-1.023 0l-11.25 10.5c-.153.142-.239.34-.239.548v5c0 .298.177.568.45.688.274.119.591.065.81-.138l10.74-9.972 10.74 9.972c.142.131.325.2.51.2.102 0 .204-.021.3-.063.273-.119.45-.39.45-.688v-5c0-.207-.086-.405-.238-.547z" fill="#009688" data-original="#009688" className="hovered-path active-path" style={svgStyle} data-old_color="#009688"/><path d="m12 3c-.184 0-.368.067-.512.202l-11.25 10.5c-.152.142-.238.34-.238.548v5c0 .298.177.568.45.688.097.042.199.062.301.062.186 0 .368-.069.51-.2l10.739-9.972z" fill="#94B8E4" data-original="#008376"  style={svgStyle}  data-old_color="#008376"/></g> </svg>

                    </div>
                </div>

                <div className={hp.dropped} style={status}>
                    <div className={hp.body_dropp}>
                        <div className={hp.main}>
                            <div className={hp.img}>
                                <div className={hp.circle_min}>
                                    <img src={logo} alt=""/>
                                </div>
                            </div>
                            <div className={`${hp.name_drop} ${hp.color}`}>
                                <NavLink to="/ozerov.life">Александр Озеров</NavLink>
                            </div>
                        </div>
                        <div className={hp.span_wrapp}>
                            <div className={hp.span}></div>
                        </div>
                        <div className={hp.list}>
                            <div className={`${hp.list_item} ${hp.color}`}>
                                <a href="/" >Настройки</a>
                            </div>
                            <div className={`${hp.list_item} ${hp.color}`}>
                                <a href="/" >Помощь</a>
                            </div>
                        </div>
                        <div className={hp.span_wrapp}>
                            <div className={hp.span}></div>
                        </div>
                        <div className={`${hp.list_item} ${hp.exit} ${hp.color}`}>
                            <a href="/" >Выход</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderProfile;