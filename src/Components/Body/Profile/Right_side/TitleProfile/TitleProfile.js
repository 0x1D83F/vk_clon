import React from 'react';
import tp from './TitleProfile.module.scss';

class TitleProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: 'изменить статус',
            display: 'none',
            target: '',
            statusColor: 'a3a3a3',
            hiddenMore: 'Скрыть подробную информацию',
            showMore: 'Показать подробную информацию',
            transformer: 'none'
        }
    }

    renderInput = (event) => {
        let target = event.target.value;
        if (target === '') {
            this.setState({ place: 'изменить статус', statusColor: '#a3a3a3' })
        } else {
            this.setState({ place: target, statusColor: '#000' })
        }
    }
    ShowStatusHandler = () => {
        if (this.state.display === 'none') {
            this.setState({
                display: 'block',
            })
        } else {
            this.setState({
                display: 'none',
            })
        }
    }
    showTransformer = () => {
        if (this.state.transformer === 'none') {
            this.setState({ transformer: 'block' })
        } else {
            this.setState({ transformer: 'none' })
        }
    }


    render() {


        let visibility = { display: this.state.display }
        let statusColor = { color: this.state.statusColor }
        let transformer = { display: this.state.transformer }

        return (
            <div className={tp.title}>
                {this.props.storage.main.map((i, index) => {
                    return (
                        <div className={tp.wrapp} key={index}>
                            <div className={tp.name}>
                                <p>{i.name}</p>
                            </div>
                            <div className={tp.status}>
                                <div style={statusColor} className={tp.inp}
                                    onClick={this.ShowStatusHandler}>{this.state.place}</div>
                                <div className={tp.hidden_status} style={visibility}>
                                    <div className={tp.hidde_input}>
                                        <input type="textarea" onChange={this.renderInput} />
                                    </div>
                                    <div className={tp.hidden_btn}>
                                        <button type='submit' onClick={this.ShowStatusHandler}>Сохранить</button>
                                    </div>
                                </div>
                            </div>
                            <div className={tp.line}></div>
                            <div className={tp.city}>
                                <div className={tp.item_title}>Город</div>
                                <div className={tp.value}>
                                    <a href="/">
                                        {i.city}
                                    </a>
                                </div>
                            </div>
                            <div className={tp.showMore_btn}>
                                <button onClick={this.showTransformer} className={tp.btn}
                                    type='button'>{this.state.hiddenMore}</button>
                            </div>
                            <div className={tp.transformed_info} style={transformer}>

                                <div className={tp.block}>
                                    <div className={tp.block_title}>
                                        <div className={tp.block_name}>
                                            Контактная информация
                                    </div>
                                        <div className={tp.block_line_wrap}>
                                            <div className={tp.block_line}></div>
                                        </div>
                                    </div>
                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Instagram
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.instagra}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={tp.block}>
                                    <div className={tp.block_title}>
                                        <div className={tp.block_name}>
                                            Образование
                                    </div>
                                        <div className={tp.block_line_wrap}>
                                            <div className={tp.block_line}></div>
                                        </div>
                                    </div>
                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Школа
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.school}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={tp.block}>
                                    <div className={tp.block_title}>
                                        <div className={tp.block_name}>
                                            Жизненная позиция
                                    </div>
                                        <div className={tp.block_line_wrap}>
                                            <div className={tp.block_line}></div>
                                        </div>
                                    </div>
                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Полит. предпочтения:
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.politics_preferences}
                                            </a>
                                        </div>
                                    </div>
                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Мировоззрение:
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.worldview}
                                            </a>
                                        </div>
                                    </div>
                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Главное в жизни:
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.main_in_life}
                                            </a>
                                        </div>
                                    </div>

                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Главное в людях:
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.main_in_people}
                                            </a>
                                        </div>
                                    </div>

                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Отн. к курению:
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.smooking}
                                            </a>
                                        </div>
                                    </div>
                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Отн. к алкоголю:
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.alcohol}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={tp.block}>
                                    <div className={tp.block_title}>
                                        <div className={tp.block_name}>
                                            Личная информация
                                    </div>
                                        <div className={tp.block_line_wrap}>
                                            <div className={tp.block_line}></div>
                                        </div>
                                    </div>
                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Любимая музыка:
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.favorite_music}
                                            </a>
                                        </div>
                                    </div>

                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Любимые фильмы:
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.favorite_films}
                                            </a>
                                        </div>
                                    </div>

                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Любимые книги:
                                    </div>
                                        <div className={tp.value}>
                                            <a href="/">
                                                {i.favorite_books}
                                            </a>
                                        </div>
                                    </div>

                                    <div className={tp.block_items}>
                                        <div className={tp.item_title}>
                                            Любимые цитаты:
                                    </div>
                                        <div className={tp.value}>
                                            <p>
                                                {i.favorite_quotes}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={tp.line}></div>
                            <div className={tp.our_information}>
                                <div className={tp.our_item}>
                                    <a href="/">
                                        <div className={tp.count}>
                                            36
                                    </div>
                                        <div className={tp.hang}>
                                            <p>Друзей</p>
                                        </div>
                                    </a>
                                </div>
                                <div className={tp.our_item}>
                                    <a href="/">
                                        <div className={tp.count}>
                                            36
                                    </div>
                                        <div className={tp.hang}>
                                            <p>Подписчиков</p>
                                        </div>
                                    </a>
                                </div>
                                <div className={tp.our_item}>
                                    <a href="/">
                                        <div className={tp.count}>
                                            36
                                    </div>
                                        <div className={tp.hang}>
                                            <p>Фотографий</p>
                                        </div>
                                    </a>
                                </div>
                                <div className={tp.our_item}>
                                    <a href="/">
                                        <div className={tp.count}>
                                            36
                                    </div>
                                        <div className={tp.hang}>
                                            <p>Видеозаписей</p>
                                        </div>
                                    </a>
                                </div>
                                <div className={tp.our_item}>
                                    <a href="/">
                                        <div className={tp.count}>
                                            36
                                    </div>
                                        <div className={tp.hang}>
                                            <p>Подарков</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> // end title
        )
    }

}

export default TitleProfile;