import React,{ Component } from "react";
import { connect } from "react-redux";
import {
    Route,
} from "react-router-dom";
import {View} from "react-web-dom";
import { ThemeStyle, windowHeight, windowWidth } from "../../utils/style";
import {
    Row,
    AutoComplete,
    Input,
    Button,
    Icon,
    Dropdown,
    Menu,
    Card,
    Col,
    Tabs,
    Form,
    Message,
} from "antd";

import styles from '../../styles/user/login.css';
import 'particles.js';
import {particlesJson} from './testData'
import {Fetch} from '../../utils'
import Registered from './registered'
import LoginView from './loginView'



const TabPane = Tabs.TabPane;





class UserLogin extends Component {
    componentDidMount(){
        global.particlesJS(particlesJson);
    }
    render() {
        return (
            <div>
                <div id="particles-js" style={{backgroundColor:ThemeStyle.themeColor}}></div>
                <div className={styles.div1}>
                    <View style={{alignItems:'center',marginBottom:20}}>
                        <img src={require('../../images/logo.png')} style={{width:268*0.5}}/>
                    </View>
                    <Tabs defaultActiveKey="1" className={styles.tabs1} tabBarStyle={{border:0,marginBottom:20}}>
                        <TabPane tab="注册" key="1">
                            <Registered/>
                        </TabPane>
                        <TabPane tab="登陆" key="2">
                            <LoginView/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

const indexViewFunc = store => {
    const { shopCartIndex } = store.view
    return {
        login: store.app.user.login
    }
}

export default connect(indexViewFunc)(UserLogin)
