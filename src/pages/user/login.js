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
    Modal,
} from "antd";

import styles from '../../styles/user/login.css';
import 'particles.js';
import {particlesJson} from './testData'
import {Fetch} from '../../utils'
import Registered from './registered'
import LoginView from './loginView'
import SendEmail from './sendEmail'



const TabPane = Tabs.TabPane;





class UserLogin extends Component {
    state = {
        visible: false
    };
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
                            <Registered
                                success = {()=>{
                                    this.registeredSuccess()
                                }}
                            />
                        </TabPane>
                        <TabPane tab="登陆" key="2">
                            <LoginView
                                showSendEmailModal = {this.showSendEmailModal}
                            />
                        </TabPane>
                    </Tabs>
                </div>
                <Modal
                    title="需要激活邮件"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer = {null}
                >
                    <SendEmail history={this.props.history}/>
                </Modal>
            </div>
        )
    }
    registeredSuccess(){
        Modal.success({
            title: '恭喜注册成功了',
            content: '快去邮箱进行激活吧...',
        });
    }
    handleOk = e => {
        this.setState({
            visible: false
        });
    };
    handleCancel = e => {
        this.setState({
            visible: false
        });
    };
    showSendEmailModal = () => {
        this.setState({
          visible: true,
        });
    }
}

const indexViewFunc = store => {
    const { shopCartIndex } = store.view
    return {
        login: store.app.user.login
    }
}

export default connect(indexViewFunc)(UserLogin)
