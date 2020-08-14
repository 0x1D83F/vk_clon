import React from 'react';
import rs from './RightSide.module.scss';
import TitleProfile from "./TitleProfile/TitleProfile";
import MyPhotos from "./MyPhotos/MyPhotos";
import AddPosts from "./AddPosts/AddPosts";
import ShowPosts from "./ShowPosts/ShowPosts";


class RightSide extends React.Component{
    render(){

        return(
            <div className={rs.right}>
                <TitleProfile storage={this.props.storage} />
                <MyPhotos />
                <AddPosts storage={this.props.storage} />
                <ShowPosts storage={this.props.storage} />
            </div>
        )
    }
}
export default RightSide;