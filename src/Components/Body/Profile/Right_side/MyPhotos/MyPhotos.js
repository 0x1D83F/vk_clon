import React from 'react';
import mp from './MyPhotos.module.css';



class MyPhotos extends React.Component{
    render(){
        return(
            <div className={mp.myphotos}>
                <div className={mp.info}>
                    <a href="/">
                        <div>Мои фотографии</div>
                        <span>19</span>
                    </a>
                </div>
                <div className={mp.photos}>
                    <div className={`${mp.items_1} ${mp.cursor} ${mp.marr}`}>
                    </div>
                    <div className={`${mp.items_2} ${mp.cursor} ${mp.marr}`}>
                    </div>
                    <div className={`${mp.items_3} ${mp.cursor} ${mp.marr}`}>
                    </div>
                    <div className={`${mp.items_4} ${mp.cursor}`}>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPhotos;