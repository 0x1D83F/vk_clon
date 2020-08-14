import React from 'react';
import nw from './News.module.scss';
import messi from './img/fe6eb7c0-558d-11ea-b0ff-0ca8e4ba70fd.jpg';
import heart from './../../Profile/Right_side/ShowPosts/img/heart.svg'
import heart_active from './../../Profile/Right_side/ShowPosts/img/heart_active.svg';
import ll from './img/champ.jpg';


class News extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            heart: heart,
        }
    }
    activateLike = () => {
        if(this.state.heart === heart){
            this.setState({heart: heart_active })
        }else{
            this.setState({heart: heart})
        }
    }

    render(){
        // let img = this.props.content.groups.champions.logo;
        // let bg = {background: `url(${img} )  0 0 / cover no-repeat`, 'width': '50px', 'height':'50px', 'border-radius': '50%' }
        let f = {display: 'none'}

        return(
            <div className={nw.wrapper}>
                {this.props.storage.groups.map( (i,index) => {
                    return(
                        <div className={nw.paper} key={`key_${index}`}>
                            <div className={nw.header}>
                                <div className={nw.logo} >
                                    <img src={ll} alt="logo"/>
                                </div>
                                <div className={nw.info}>
                                    <div className={nw.label}>
                                        <a href="/">{i.name}</a>
                                    </div>
                                    <div className={nw.timer}>
                                        {i.time}
                                    </div>
                                </div>
                                <div style={f} className={nw.add_options}>
                                    <div className={nw.arrow}>

                                    </div>
                                    <div className={nw.dropdown}>
                                        <a href="/">
                                            <div className={nw.dropitem}>
                                                Это не интересно
                                            </div>
                                        </a>
                                        <a href="/">
                                            <div className={nw.dropitem}>
                                                Пожаловаться
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={nw.content_img}>
                                <div className={nw.content_text}>
                                    {i.text}
                                </div>
                                <div className={nw.content_screen}>
                                    <img src={messi} alt=""/>
                                </div>
                                <div className={nw.line}></div>
                            </div>
                            <div className={nw.interplay}>
                                <div className={nw.like}>
                                    <img onClick={this.activateLike} src={this.state.heart} alt="like"/>
                                </div>
                                <div className={nw.comment}>
                                </div>
                                <div className={nw.share}>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default News;