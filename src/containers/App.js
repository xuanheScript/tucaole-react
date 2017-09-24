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


const App = () => (
    <ConnectedRouter
        history = {history}
    >
        <Container>
            <Switch>

                <Route path="/" component={Index}/>

                {
                    // <Route path='/index/:tab' component={Index}/>
                }

            </Switch>
        </Container>
    </ConnectedRouter>
)

export default App
