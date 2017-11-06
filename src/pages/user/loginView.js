import React,{ Component } from "react";
import {View} from "react-web-dom";
import { ThemeStyle, windowHeight, windowWidth } from "../../utils/style";
import {
    Row,
    Input,
    Button,
    Icon,
    Form,
    message,
} from "antd";

import styles from '../../styles/user/login.css';
import {Fetch} from '../../utils'
const FormItem = Form.Item;


class LoginView extends React.Component {
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
            const {
                showSendEmailModal
            } = this.props
            showSendEmailModal()
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
                       	captchaObj.appendTo('#login-captcha-box');
                   	});
                })
            }else {
                message.warning(e.msg)
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
                <FormItem>
                    <div id="login-captcha-box"></div>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                        登陆
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(LoginView)
