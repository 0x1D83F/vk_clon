import React from 'react';
import pr from './Profile.module.scss';



import LeftSide from "./Left_side/LeftSide";
import RightSide from "./Right_side/RightSide";

class Profile extends React.Component{

    render(){

        return(
            <div className={pr.wrapp}>
                <LeftSide />
                <RightSide storage={this.props.storage} />
            </div>
        )
    }
}

export default Profile;

