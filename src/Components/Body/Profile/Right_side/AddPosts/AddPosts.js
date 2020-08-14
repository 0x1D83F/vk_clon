import React from 'react';
import adp from './AddPosts.module.scss';

import ava from './../../img/IMG_9397-1-3--.jpg';

import { createAction_addPost } from './../../../../../RedX/Profile_reducer';



class AddPosts extends React.Component {
    constructor() {
        super();
        this.state = {
            textInp: 'Что у вас нового?',
            newPostValue: '',
        }
    }
    inputFocus = () => {
        this.setState({ textInp: '' })
    }
    inputBlur = () => {
        this.setState({ textInp: 'Что у вас нового?' })
    }
    handleChanger = (event) => {
        this.setState({ newPostValue: event.target.value })
    }

    active = () => {
        let send = this.state.newPostValue;
        this.props.storage.dispatch(createAction_addPost(send))

        this.setState({ newPostValue: '' })
    }

    render() {

        return (
            <div className={adp.wrapp}>
                <div className={adp.ava}>
                    <img src={ava} alt="avatar" />
                </div>
                <div className={adp.input}>
                    <input onChange={this.handleChanger} value={this.state.newPostValue} type="text" placeholder={this.state.textInp} onBlur={this.inputBlur} onFocus={this.inputFocus} />
                </div>

                <div className={adp.btn}>
                    <button
                        onClick={this.active}
                        className={adp.btn_cl}
                    >Опубликовать</button>
                </div>
            </div>
        )
    }
}
export default AddPosts;