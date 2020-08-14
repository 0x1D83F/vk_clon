import React from 'react';
import hs from './Story.module.scss';

import sv from './img/IMG_9397-1-3--.jpg';


class Story extends React.Component{


        render()
        {
            return (
                <div className={hs.wrapper}>
                    <div className={hs.title}>Истории</div>
                    <div className={hs.items}>
                        <div className={hs.block}></div>
                        <div className={hs.block}></div>
                        <div className={hs.block}></div>
                        <div className={hs.block}></div>
                        <div className={hs.block}></div>
                    </div>
                </div>
            )
        }
    }

    export
    default
    Story;