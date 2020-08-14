import React from 'react';
import fd from './Feed.module.scss';
import Story from "./Story/Story";
import FeedSidebar from "./FeedSidebar/FeedSidebar";
import News from "./News/News";

class Feed extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){

        return(
            <div className={fd.wrapper}>
                <div className={fd.center}>
                    <Story />
                    <News storage={this.props.storage} />
                </div>
                <div className={fd.sidebar}>
                    <FeedSidebar />
                </div>
            </div>
        )
    }
}

export default Feed;