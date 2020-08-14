import React from 'react';
import inp from './Input.module.scss';

import { createAction_addMessage } from './../../../../../../RedX/Dialogs_reducer';

class Dialog_input extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }
    changeHandler = (event) => {
        let target = event.target.value;
        this.setState({ value: target })
    }
    send = () => {
        this.props.storage.dispatch(createAction_addMessage(this.state.value))
        this.setState({ 'value': '' })
    }
    keyboadHandler = (event) => {
        let target = event.key;
        if (target === 'Enter') this.send();
    }

    render() {
        return (
            <div className={inp.wrapper}>
                <div className={inp.area}>
                    <input onKeyUp={this.keyboadHandler} onChange={this.changeHandler} value={this.state.value} type="text" placeholder='напишите сообщение...' />
                </div>
                <div className={inp.submit}>
                    <button type='submit' onClick={this.send} className={inp.btn} >
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enableBackground="new 0 0 512 512"
                            height="25px" viewBox="0 0 512 512" width="25px">
                            <g transform="matrix(-1.83697e-16 -1 -1 1.83697e-16 512 512)">
                                <g>
                                    <path
                                        d="m501.44 10.56c-8.86-8.859-21.435-12.449-33.636-9.603-.056.013-.112.026-.168.04l-402.079 98.403c-38.599 9.446-65.557 43.797-65.557 83.535v53.065c0 19.333 15.319 35.156 34.457 35.967l151.243 25.744c3.196.544 6.457-.495 8.749-2.787l178.237-178.238c6.249-6.248 16.379-6.248 22.628 0 6.248 6.249 6.248 16.379 0 22.628l-178.237 178.238c-2.292 2.292-3.331 5.553-2.787 8.749l25.743 151.243c.811 19.137 16.634 34.456 35.967 34.456h53.065c39.738 0 74.089-26.958 83.535-65.556l98.402-402.08c.014-.056.027-.112.04-.168 2.848-12.202-.742-24.776-9.602-33.636z"
                                        data-original="#000000" className="active-path" data-old_color="#000000"
                                        fill="#A6ACB7" />
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}

export default Dialog_input;