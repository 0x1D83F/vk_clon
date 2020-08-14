import React from 'react';
import hr from './HeaderSearch.module.css';
import s_logo from './img/buscar.svg';

class HeaderSearch extends React.Component{
    constructor() {
        super();
        this.state = {
            backgroundColor: '#224B7A'
        }
    }
    whiteColor = () => {
        let stateColor = this.state.backgroundColor;
        if(stateColor === '#fff'){
            this.setState({backgroundColor: '#224B7A'})
        } else {
            this.setState({backgroundColor: '#fff'})
        }
    }


    render() {
        let bg = {backgroundColor: this.state.backgroundColor}
        return(
                <div className={hr.content}>
                    <form action="#" style={bg}>
                        <div className={hr.logo}>
                            <img src={s_logo} alt=""/>
                        </div>
                        <div className={hr.input}>
                            <input
                                type="text"
                                placeholder='Поиск'
                                onFocus={this.whiteColor}
                                onBlur={this.whiteColor}
                            />
                        </div>
                    </form>
                </div>
        )
    }
}
export default HeaderSearch;