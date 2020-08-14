import { rerenderer } from "../index";
const ADD_MESSAGE = 'ADD_MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        if (action.text.length < 1) {
            alert('сообщение пустое');
        } else {
            let obj = { time: '12:55', text: `${action.text}`, shortName: 'Александр' };

            state['Александр Озеров']["Arnold schwarzenegger"].push(obj)

            rerenderer();
        }

    }

    return state;
}

export function createAction_addMessage(text) {
    return {
        type: ADD_MESSAGE,
        text: `${text}`,
        shortName: 'Александр'
    }
}

export default dialogsReducer;