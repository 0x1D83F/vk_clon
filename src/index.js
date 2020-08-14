import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import storage from './RedX/Storage';

export function rerenderer(){
    ReactDOM.render(
        <React.StrictMode>
            <App storage={storage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderer();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
