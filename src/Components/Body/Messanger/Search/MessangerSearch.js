import React from 'react';
import ms from './MessangerSeacrh.module.scss';
import mess from "../Messanger.module.scss";
import s_logo from "../../../#Head/search/img/buscar.svg";

class MessangerSearch extends React.Component{
    constructor() {
        super();
        this.state = {
            place: 'Поиск',
        }

    }

    changer = () => {
        if (this.state === 'Поиск') {
            this.setState({place: ''})
        } else {
            this.setState({place: 'Поиск'})
        }
    }
    render(){
        return(
            <div className={ms.search}>
                <div className={ms.logo}>
                    <img src={s_logo} alt="search"/>
                </div>
                <div className={ms.input}>
                    <input type="text" placeholder={this.state.place} onChange={this.changer}
                           onBlur={this.changer}/>
                </div>
                <div className={ms.start_dialog}>
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             version="1.1"
                             id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"
                             xmlSpace="preserve" width="512px"
                             height="512px">
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
                                            data-original="#000000" className="active-path" data-old_color="#000000"
                                            fill='#7F9ABB'/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        )
    }
}

export default MessangerSearch;