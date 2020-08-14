import React from 'react';
import sb from './FeedSidebar.module.scss';


class FeedSidebar extends React.Component {
    render() {
        return (
            <div className={sb.wrapper}>
                <div className={sb.main_side}>
                    <div className={sb.news}>
                        <div className={`${sb.title} ${sb.active}`}>
                            <a href="/">
                                <div className={sb.name}>Новости</div>
                            </a>
                            <a href="/">
                                <div className={`${sb.filter} ${sb.mod_1} ${sb.mod_3}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="-5 0 394 394.00003"
                                         width="13px">
                                        <g>
                                            <path
                                                d="m367.820312 0h-351.261718c-6.199219-.0117188-11.878906 3.449219-14.710938 8.960938-2.871094 5.585937-2.367187 12.3125 1.300782 17.414062l128.6875 181.285156c.042968.0625.089843.121094.132812.183594 4.675781 6.3125 7.207031 13.960938 7.21875 21.816406v147.800782c-.027344 4.375 1.691406 8.582031 4.773438 11.6875 3.085937 3.101562 7.28125 4.851562 11.65625 4.851562 2.222656-.003906 4.425781-.445312 6.480468-1.300781l72.3125-27.570313c6.476563-1.980468 10.777344-8.09375 10.777344-15.453125v-120.015625c.011719-7.855468 2.542969-15.503906 7.214844-21.816406.042968-.0625.089844-.121094.132812-.183594l128.691406-181.289062c3.667969-5.097656 4.171876-11.820313 1.300782-17.40625-2.828125-5.515625-8.511719-8.9765628-14.707032-8.964844zm0 0"
                                                data-original="#000000" className="active-path" data-old_color="#000000"
                                                fill="#92ABC6"/>
                                        </g>
                                    </svg>
                                </div>
                            </a>
                            <a href="/">
                                <div className={`${sb.add} ${sb.mod_1}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 448 448"
                                         width="13px">
                                        <g>
                                            <path
                                                d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"
                                                data-original="#000000" className="active-path" data-old_color="#000000"
                                                fill="#92ABC6"/>
                                        </g>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className={sb.list}>
                            <ul className={sb.list_type}>
                                <a href="/">
                                    <li className={`${sb.list_item} mod_2`}>
                                        <div>Фотографии</div>
                                    </li>
                                </a>
                                <a href="/">
                                    <li className={`${sb.list_item} mod_2`}>
                                        <div>Видеозаписи</div>
                                    </li>
                                </a>
                                <a href="/">
                                    <li className={`${sb.list_item} mod_2`}>
                                        <div>Подкасты</div>
                                    </li>
                                </a>
                                <a href="/">
                                    <li className={`${sb.list_item} mod_2`}>
                                        <div>Коронавирус</div>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <a href="/">
                        <div className={`${sb.recommendation} mod_2`}>
                            <div>Рекомендации</div>
                        </div>
                    </a>
                    <a href="/">
                        <div className={`${sb.search} mod_2`}>
                            <div>Поиск</div>
                        </div>
                    </a>
                    <a href="/">
                        <div className={`${sb.liked} mod_2`}>
                            <div>Понравилось</div>
                        </div>
                    </a>
                    <a href="/">
                        <div className={`${sb.updates} mod_2`}>
                            <div>Обновления</div>
                        </div>
                    </a>
                    <a href="/">
                        <div className={`${sb.comments} mod_2`}>
                            <div>Комментарии</div>
                        </div>
                    </a>
                </div>
                <div className={sb.add_filter}></div>
            </div>
        )
    }
}

export default FeedSidebar;