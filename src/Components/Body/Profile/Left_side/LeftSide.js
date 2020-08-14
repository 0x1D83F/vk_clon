import React from 'react';
import PhotoProfile from "./PhotoProfile/PhotoFrofile";
import pr from "../Profile.module.scss";



class LeftSide extends React.Component{
    render(){
        return (
            <div className={pr.left}>
                <PhotoProfile />
            </div>
        )
    }
}
export default LeftSide;