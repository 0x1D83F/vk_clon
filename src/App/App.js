import React from 'react';

import app from './App.module.scss';

import Nav from "./../Components/Body/Nav/Navigation";
import Profile from "./../Components/Body/Profile/Profile";
import Messanger from "./../Components/Body/Messanger/Messanger";
import Head from "../Components/#Head/Head";

import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Feed from "../Components/Body/Feed/Feed";
import ShowDialog from "../Components/Body/Messanger/Dialogs/ShowDialog/ShowDialog";


class App extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <Head storage={this.props.storage}/>
                    <div className={app.wrapper}>
                        <Nav/>
                        <div className={app.wrp_route}>
                            <Switch>
                                <Route
                                    exact
                                    path='/ozerov.life'
                                    render={
                                        () => <Profile storage={this.props.storage} />
                                    } />
                                <Route exact path='/im' component={Messanger} />
                                <Route
                                    exact
                                    path='/feed'
                                    render={
                                        () => <Feed storage={this.props.storage} />
                                    }
                                />
                                <Route
                                    exact
                                    path='/corr'
                                    render={
                                        () => <ShowDialog storage={this.props.storage} />
                                    }
                                    />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
            ;
    }
}

export default App;
