import profileReducer from './Profile_reducer.js';
import dialogsReducer from './Dialogs_reducer.js';


let state = {
    main: [
        {
            'name': 'Александр Озеров',
            'city': 'Los Angeles',
            'instagram': 'ozerov.life',
            'school': `Школа №84 \'12'`,
            'politics_preferences': 'Умеренные',
            'worldview': 'Светский гуманизм',
            'main_in_life': 'Саморазвитие',
            'main_in_people': 'Ум и креативность',
            'smooking': 'Нейтральное',
            'alcohol': 'Нейтральное',
            'favorite_music': ' Electro house, indietronic, trance, инди рок',
            'favorite_films': ' Форест гамп, 1+1',
            'favorite_books': 'Морфий',
            'favorite_quotes': 'Если добро имеет причину, оно уже не добро; если имеет последствие - награду, оно тоже не добро. Стало быть, добро вне всяких цепи причин и следствий'
        },
    ],
    groups: [
        {
            'logo': '/static/media/champ.839be6d1.jpg',
            'name': 'Champions Cup',
            'time': '5 минут назад',
            'text': 'Lionel Messi went 34 days between La Liga goals for Barcelona.'
        }
    ],
    posts: [
        {
            id: 1, name: 'Александр Озеров',
            text: 'lorem ipsum dolor sit ammet', contentImg: false,
            logo: '/static/media/IMG_9397-1-3--.cbb56f27.jpg',
            time: '',
        },
        {
            id: 2, name: 'Александр Озеров',
            text: 'Тестовый текст для постов', contentImg: false,
            logo: '/static/media/IMG_9397-1-3--.cbb56f27.jpg',
            time: '',
        }
    ],
    'Александр Озеров': { // Чья страница
        'Arnold Schwarzenegger': [ // с кем диалог
            { time: '12:46', shortName: 'Александр', text: 'lore1', date: new Date },
            { time: '12:46', shortName: 'Александр', text: 'lorem2', date: new Date },
            { time: '12:46', shortName: 'Александр', text: 'lorem3', date: new Date },

        ],
    },
    dispatch(action) {
        profileReducer(this, action);
        dialogsReducer(this, action);

    }
}


export default state;