import React,{Component} from "react";
import {
    Route,
    // BrowserRouter,
    Switch,
    Redirect,
} from "react-router-dom";

import { withRouter } from 'react-router-dom'
import Container from "./Index";
import { connect } from "react-redux";
import Header from "../component/index/header";

import Index from "../pages/index";
import UserProfileEdit from "../pages/user/profileEdit";
import UserSetting from "../pages/user/setting";


class BasicLayout extends Component {
    render(){
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/user/profileEdit" component={UserProfileEdit}/>
                    <Route path="/user/setting" component={UserSetting}/>
                </Switch>
            </div>
        )
    }
}


const mapStateToProps = ({app,auth}) => {
    // const {
    //     initUserInfoStorageState
    // } = app.appInitial
    // const {
    //     settingIndex,
    //     location
    // } = app
    return {
        // initUserInfoStorageState,
        // settingBasicFetchStatus: settingIndex.fetchStatus,
        // settingBasicData: settingIndex.data,
        // allAddressDataFetchStatus: location.allAddressDataFetchStatus,
    }
}

export default withRouter(connect(mapStateToProps,
    {
        // initUserInfoStorage,
        // initialAllLocationData,
        // getAppBasisData,
        // getSettingBasicData,
    }
)(BasicLayout))
