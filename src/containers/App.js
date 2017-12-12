import React from "react";
import {
    Route,
    // BrowserRouter,
    Switch,
    Redirect,
} from "react-router-dom";

import { ConnectedRouter } from 'react-router-redux'
import { history } from '../store/ConfigureStore'
import Container from "./Index";
import '../utils/global.css'
import UserLogin from "../pages/user/login";
import BasicLayout from "./BasicLayout";



const App = () => (
    <ConnectedRouter
        history = {history}
    >
        <Container>
            <Switch>
                <Route path="/user/login" component={UserLogin}/>
                <Route path="/" component={BasicLayout}/>
            </Switch>
        </Container>
    </ConnectedRouter>
)

export default App
