import React from "react";
import shp from './ShowPosts.module.scss';

import heart from './img/heart.svg';
import act from './img/heart_active.svg';



class ShowPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heart: heart,
        }
    }

    activate = () => {
        if (this.state.heart === heart) {
            this.setState({heart: act})
        } else {
            this.setState({heart: heart})
        }
    }
    // contentConstructor = () => {
    //     return(
    //         `<a>${stage.posts.contentImg}</a>
    //           <p>${stage.posts.text}</p>`
    //     )
    // }

    render() {
        return (
            <div className={shp.shrp}>
                {this.props.storage.posts.reverse().map((i,index) => {
                    return (
                        <div className={shp.wrapp} key={index}>
                            <div className={shp.info}>
                                <div className={shp.logo}>
                                    <img src={i.logo} alt="logo"/>
                                </div>
                                <div className={shp.name}>
                                    <a href="/">
                                        {i.name}
                                    </a>
                                </div>
                            </div>
                            <div className={shp.post_message}>
                                { i.text }
                            </div>
                            <div className={shp.line}></div>
                            <div className={shp.interaction}>
                                <div className={shp.like}>
                                    <img src={this.state.heart} alt="like" onClick={this.activate}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ShowPosts;