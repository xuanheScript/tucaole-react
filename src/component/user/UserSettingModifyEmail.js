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
    Col,
    Modal,
} from "antd";

import styles from '../../styles/user/login.css';
import {Fetch} from '../../utils'
const FormItem = Form.Item;


const formItemLayout = {
    labelCol: {
       xs: { span: 24 },
       sm: { span: 6 },
     },
     wrapperCol: {
       xs: { span: 24 },
       sm: { span: 18 },
     },
};


class UserSettingModifyEmail extends React.Component {
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
        const {
            visible,
            onOk,
            onCancel,
        } = this.props
        return(
            <Modal
                title="更改邮箱"
                visible={visible}
                onOk={()=>{onOk()}}
                onCancel={()=>{onCancel()}}
                footer = {null}
            >
                <Form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <View style={{alignItems:'center'}}>
                        <View style={{width:400}}>
                            <FormItem
                                hasFeedback
                                label="旧邮箱验证码："
                                {...formItemLayout}
                            >
                                <Row gutter={8}>
                                    <Col span={14}>
                                        {
                                            getFieldDecorator("password", {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: "请输入验证码!"
                                                    }
                                                ]
                                            })(<Input type="password" placeholder={'验证码'}/>)
                                        }
                                    </Col>
                                    <Col span={10}>
                                        <Button type="primary" disabled={true}>
                                            50秒
                                        </Button>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem
                                hasFeedback
                                label="新邮箱："
                                {...formItemLayout}
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
                                label="新邮箱验证码："
                                {...formItemLayout}
                            >
                                <Row gutter={8}>
                                    <Col span={14}>
                                        {
                                            getFieldDecorator("newEmail", {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: "请输入验证码!"
                                                    }
                                                ]
                                            })(<Input type="password" placeholder={'验证码'}/>)
                                        }
                                    </Col>
                                    <Col span={10}>
                                        <Button type="primary">
                                            获取验证码
                                        </Button>
                                    </Col>
                                </Row>
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
                                    确认更改
                                </Button>
                            </FormItem>
                        </View>
                    </View>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(UserSettingModifyEmail)
