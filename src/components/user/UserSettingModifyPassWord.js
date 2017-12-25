import React, { Component } from "react";
import { View } from "react-web-dom";
import { ThemeStyle, windowHeight, windowWidth } from "../../utils/style";
import { Row, Input, Button, Icon, Form, message, Col, Modal } from "antd";

import styles from "../../styles/user/login.css";
import { Fetch } from "../../utils";
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 }
    }
};

class UserSettingModifyPassWord extends React.Component {
    state = {
        confirmDirty: false
    };
    handleSubmit(e) {
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
    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    componentDidMount() {}
    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const { visible, onOk, onCancel } = this.props;
        return (
            <Modal
                title="修改密码"
                visible={visible}
                onOk={() => {
                    onOk();
                }}
                onCancel={() => {
                    onCancel();
                }}
                footer={null}
            >
                <Form
                    onSubmit={e => {
                        this.handleSubmit(e);
                    }}
                >
                    <View style={{ alignItems: "center" }}>
                        <View style={{ width: 400 }}>
                            <FormItem
                                hasFeedback
                                label="旧密码："
                                {...formItemLayout}
                            >
                                {getFieldDecorator("oldPassword", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入旧密码!"
                                        }
                                    ]
                                })(
                                    <Input
                                        type="password"
                                        placeholder={"旧密码"}
                                    />
                                )}
                            </FormItem>
                            <FormItem
                                hasFeedback
                                label="新密码："
                                {...formItemLayout}
                            >
                                {getFieldDecorator("password", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入密码!"
                                        },
                                        {
                                            validator: this.checkConfirm
                                        }
                                    ]
                                })(
                                    <Input
                                        type="password"
                                        placeholder={"密码"}
                                    />
                                )}
                            </FormItem>
                            <FormItem
                                hasFeedback
                                label="确认新密码："
                                {...formItemLayout}
                            >
                                {getFieldDecorator("confirm", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入确认密码!"
                                        },
                                        {
                                            validator: this.checkPassword
                                        }
                                    ]
                                })(
                                    <Input
                                        type="password"
                                        onBlur={this.handleConfirmBlur}
                                        placeholder={"确认密码"}
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ width: "100%" }}
                                    onClick={() => {
                                        this.props.history.push("/");
                                    }}
                                >
                                    确认更改
                                </Button>
                            </FormItem>
                        </View>
                    </View>
                </Form>
            </Modal>
        );
    }
}

export default Form.create()(UserSettingModifyPassWord);
