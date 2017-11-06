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
import Index from "../pages/index";
import UserLogin from "../pages/user/login";
import UserProfileEdit from "../pages/user/profileEdit";


const App = () => (
    <ConnectedRouter
        history = {history}
    >
        <Container>
            <Switch>

                <Route exact path="/" component={Index}/>
                <Route path="/user/login" component={UserLogin}/>
                <Route path="/user/profileEdit" component={UserProfileEdit}/>

                {
                    // <Route path='/index/:tab' component={Index}/>
                }

            </Switch>
        </Container>
    </ConnectedRouter>
)

export default App
