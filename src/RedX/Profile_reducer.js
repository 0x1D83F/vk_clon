import { rerenderer } from "../index";
const ADD_POST = 'ADD-POST';



const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let counter = state.posts.length + 1;
        if (action.postValue.length < 1) {
            alert('нельзя запостить пустое сообщение')
        } else {
            let postValue = action.postValue;

            let res = {
                id: counter, name: 'Александр Озеров',
                text: postValue, contentImg: false,
                logo: '/static/media/IMG_9397-1-3--.cbb56f27.jpg',
                time: `(${new Date().getDate()})`,
            }

            state.posts.push(res);
            counter = counter + 1;

            rerenderer();
        }
    }

    return state;
}

export function createAction_addPost(send) {
    return {
        type: ADD_POST,
        postValue: send
    }
}

export default profileReducer;