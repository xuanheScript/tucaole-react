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


class SendEmail extends React.Component {
    state = {
        confirmDirty: false,
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
            // const {
            //     showSendEmailModal
            // } = this.props
            // showSendEmailModal()
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

    }
    render(){
        const { getFieldDecorator,getFieldValue } = this.props.form;
        return(
            <Form onSubmit={(e)=>{this.handleSubmit(e)}}>
                <View style={{alignItems:'center'}}>
                    <View style={{width:250}}>
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
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{width:'100%'}}
                                onClick = {()=>{
                                    this.props.history.push('/')
                                }}
                            >
                                发送邮件
                            </Button>
                        </FormItem>
                    </View>
                </View>
            </Form>
        )
    }
}

export default Form.create()(SendEmail)
