import React from 'react';
import ph from './PhotoProfile.module.css';

import logo from './../../img/IMG_9397-1-3--.jpg';

class PhotoProfile extends React.Component{
    render(){
        return(
            <div className={ph.avatar}>
                <div className={ph.photo}>
                    <img src={logo} alt="profile_photo"/>
                </div>
                <div className={ph.edit_btn}>
                    <div className={ph.edit}>
                        <a href="/">
                            Редактировать
                        </a>
                    </div>
                    <div className={ph.points}>
                        <a href="/">
                            <div className={ph.points_item}></div>
                            <div className={ph.points_item}></div>
                            <div className={ph.points_item}></div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default PhotoProfile;