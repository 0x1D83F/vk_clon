import React from 'react';
import nav from './Navigation.module.scss';


import home from './img/home.svg';
import news from './img/news.svg';
import mess from './img/comment.svg';
import fri from './img/user.svg';
import comm from './img/community.svg';
import photo from './img/photos.svg';
import music from './img/music.svg';
import video from './img/video.svg';
import games from './img/gamepad.svg';

import sett from './img/settings.svg';

import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (

            <div className={nav.menu}>
                <nav>
                    <ul className={nav.menu_list}>
                        <li className={nav.menu_item}>
                            <NavLink to="/ozerov.life">
                                <div className={nav.link_container}>
                                    <img src={sett} alt="" className={nav.setting_hide}/>
                                    <img src={home} alt=""/>
                                    <p className={nav.base}>Моя страница</p>
                                </div>
                            </NavLink>
                        </li>
                        <li className={nav.menu_item}>
                            <NavLink to="/feed">
                                <div className={nav.link_container}>
                                    <img src={sett} alt="" className={nav.setting_hide}/>
                                    <img src={news} alt=""/>
                                    <p className={nav.base}>Новости</p>
                                </div>
                            </NavLink>
                        </li>
                        <li className={nav.menu_item}>
                            <NavLink to="/im">
                                <div className={nav.link_container}>
                                    <img src={sett} alt="" className={nav.setting_hide}/>
                                    <img src={mess} alt=""/>
                                    <p className={nav.base}>Сообщения</p>
                                </div>
                            </NavLink>
                        </li>
                        <li className={nav.menu_item}>
                            <NavLink to="/friends">
                                <div className={nav.link_container}>
                                    <img src={sett} alt="" className={nav.setting_hide}/>
                                    <img src={fri} alt=""/>
                                    <p className={nav.base}>Друзья</p>
                                </div>
                            </NavLink>
                        </li>
                        <li className={nav.menu_item}>
                            <NavLink to="/community">
                                <div className={nav.link_container}>
                                    <img src={sett} alt="" className={nav.setting_hide}/>
                                    <img src={comm} alt=""/>
                                    <p className={nav.base}>Сообщества</p>
                                </div>
                            </NavLink>
                        </li>
                        <li className={nav.menu_item}>
                            <NavLink to="/photos">
                                <div className={nav.link_container}>
                                    <img src={sett} alt="" className={nav.setting_hide}/>
                                    <img src={photo} alt=""/>
                                    <p className={nav.base}>Фотографии</p>
                                </div>
                            </NavLink>
                        </li>
                        <li className={nav.menu_item}>
                            <NavLink to="/music">
                                <div className={nav.link_container}>
                                    <img src={sett} alt="" className={nav.setting_hide}/>
                                    <img src={music} alt=""/>
                                    <p className={nav.base}>Музыка</p>
                                </div>
                            </NavLink>
                        </li>
                        <li className={nav.menu_item}>
                            <NavLink to="/video">
                                <div className={nav.link_container}>
                                    <img src={sett} alt="" className={nav.setting_hide}/>
                                    <img src={video} alt=""/>
                                    <p className={nav.base}>Видео</p>
                                </div>
                            </NavLink>
                        </li>
                        <li className={nav.menu_item}>
                            <NavLink to="/games">
                                <div className={nav.link_container}>
                                    <img src={sett} alt="" className={nav.setting_hide}/>
                                    <img src={games} alt=""/>
                                    <p className={nav.base}>Игры</p>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;