import React, { Component } from "react";
import { ViewMax } from "react-web-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
// import { initUserInfoStorage } from "../actions/user";
// import { initialAllLocationData } from "../actions/location";
// import { getAppBasisData } from "../actions/app";
// import { getSettingBasicData } from "../actions/setting"
import { fetchStatus } from "../utils"
import { ThemeStyle } from "../utils/style"
// import 'autotrack';
// import fundebug from "fundebug-javascript";

import IndexHeader from "../component/index/header"


class Container extends Component {
    componentDidMount(){
        // const ga = global.ga
        // fundebug.apikey='31507bbf6122e794a5a61f57125b004e2a82d40accd5896c01f707d5e8facc2b'
        //
        // ga('create', 'UA-106626915-1', 'auto');
        //
        // ga('require', 'cleanUrlTracker');
        // ga('require', 'eventTracker');
        // ga('require', 'impressionTracker');
        // ga('require', 'mediaQueryTracker');
        // ga('require', 'outboundFormTracker');
        // ga('require', 'outboundLinkTracker');
        // ga('require', 'pageVisibilityTracker');
        // ga('require', 'urlChangeTracker');




    }
    render() {
        const {
            initUserInfoStorageState,
            initWeChatOver,
            settingBasicFetchStatus,
            settingBasicData,
            isWXAppInitialize,
            allAddressDataFetchStatus,
        } = this.props

        if(true){
            return this.props.children
        }else {
            return (
                <ViewMax style={{justifyContent:'center',alignItems:'center'}}>
                    <span style={{color:ThemeStyle.themeColor}}>晋皇在初始化...</span>
                    {
                        <svg style={{height:'4rem',width:'4rem',marginTop:'1rem'}}>
                            <use xlinkHref={require('../images/init01.svg')}/>
                        </svg>
                    }
                </ViewMax>
            )
        }
    }
}

const mapStateToProps = ({app,auth}) => {
    const {
        initUserInfoStorageState
    } = app.appInitial
    const {
        settingIndex,
        location
    } = app
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
)(Container))
