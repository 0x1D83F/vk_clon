import React from 'react';
import bd from './Body.module.scss';

import avatar from './../../../../../../images/IMG_9397-1-3--.jpg';

class Dialog_body extends React.Component {

    render() {
        let date = new Date();
        return (
            <div className={bd.wrap}>
                <div className={bd.wrapp_inner}>
                    <div className={bd.chat_time}>
                        <p>5 июля</p>
                    </div>
                    {this.props.storage['Александр Озеров']['Arnold schwarzenegger'].map((item, index) => {
                        return (
                                <div className={bd.body} key={index}>
                                    <div className={bd.avatar}>
                                        <a href="/">
                                            <div className={bd.circle}>
                                                <img src={avatar} alt="avatar"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={bd.info}>
                                        <div className={bd.name}>
                                            <a href="/">{item.shortName}</a>
                                        </div>
                                        <div className={bd.message}>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Dialog_body;