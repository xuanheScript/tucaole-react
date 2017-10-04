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
import Geetest from 'react-geetest';



const TabPane = Tabs.TabPane;
const FormItem = Form.Item;


class Registered extends React.Component {
    state = {
        confirmDirty: false,
        geetestData: null,
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue("password")) {
            callback("两次输入的密码不一致!");
        } else {
            callback();
        }
    };
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    componentDidMount(){
        Fetch.fetch('COMMONCAPTCHAGETCAPTCHA')
        .then((e)=>{
            if(e.code===0){
                this.setState({
                    geetestData : e.result
                },()=>{
                    const {geetestData} = this.state
                    global.initGeetest({
                        gt: geetestData.gt,
                       	challenge: geetestData.challenge,
                       	offline: !geetestData.success,
                        width: '268px'
                   	},(captchaObj)=>{
                       	captchaObj.appendTo('#captcha-box');
                   	});
                })
            }else {
                Message.warning(e.msg)
            }
        })
    }
    render(){
        const { getFieldDecorator,getFieldValue } = this.props.form;
        const {geetestData} = this.state
        return(
            <Form onSubmit={(e)=>{this.handleSubmit(e)}}>
                <FormItem
                    hasFeedback
                >
                    {getFieldDecorator(`email`, {
                        rules: [
                            {
                                required: true,
                                message: "请输入你的邮箱!",
                                whitespace: true,
                                type: 'email',
                            }
                        ]
                    })(<Input placeholder={'邮箱'}/>)}
                </FormItem>
                <FormItem
                    hasFeedback
                >
                    {
                        getFieldDecorator("password", {
                            rules: [
                                {
                                    required: true,
                                    message: "请输入密码!"
                                },
                                {
                                    validator: this.checkConfirm
                                }
                            ]
                        })(<Input type="password" placeholder={'密码'}/>)
                    }
                </FormItem>
                <FormItem
                    hasFeedback
                >
                      {
                        getFieldDecorator("confirm", {
                            rules: [
                                {
                                    required: true,
                                    message: "请输入确认密码!"
                                },
                                {
                                    validator: this.checkPassword
                                }
                            ]
                        })(<Input type="password" onBlur={this.handleConfirmBlur} placeholder={'确认密码'}/>)
                    }
                </FormItem>
                <FormItem>
                    <div id="captcha-box"></div>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                        确认注册
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

const RegisteredForm = Form.create()(Registered)


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
                            <RegisteredForm/>
                        </TabPane>
                        <TabPane tab="登陆" key="2">
                            <div className={styles.div2}>登陆</div>
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
