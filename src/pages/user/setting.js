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
    Tabs,
    Card,
    Tag,
} from "antd";

import styles from '../../styles/user/setting.css';
import {Fetch} from '../../utils'
import Page from "../../components/index/page";
import UserSettingModifyEmail from "../../components/user/UserSettingModifyEmail";
import UserSettingModifyPassWord from "../../components/user/UserSettingModifyPassWord";



const TabPane = Tabs.TabPane;

class Setting extends React.Component {
    state = {
        visible: false,
        passwordVisible: false,
    };
    componentDidMount(){

    }
    render(){
        const {
            visible,
            passwordVisible,
        } = this.state
        const {
            history
        } = this.props
        return(
            <Page>
                <Card>
                    <Tabs>
                        <TabPane tab="账号和密码" key="1" style={{backgroundColor:'#fff'}}>
                            <ListItem title={'邮箱'}>
                                <Tag>lj706517903@163.com</Tag>
                                <Button
                                    type="primary"
                                    onClick={this.handleOk}
                                >更改邮箱</Button>
                            </ListItem>
                            <ListItem title={'密码'}>
                                <Button
                                    type="primary"
                                    onClick={this.passwordHandleOk}
                                >修改密码</Button>
                            </ListItem>
                        </TabPane>
                    </Tabs>
                </Card>
                <UserSettingModifyEmail
                    visible = {visible}
                    onOk = {this.handleOk}
                    onCancel = {this.handleCancel}
                    history={history}
                />
                <UserSettingModifyPassWord
                    visible = {passwordVisible}
                    onOk = {this.passwordHandleOk}
                    onCancel = {this.passwordHandleCancel}
                    history={history}
                />
            </Page>
        )
    }
    handleOk = () => {
        this.setState({
            visible: true
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false
        });
    };
    passwordHandleOk = () => {
        this.setState({
            passwordVisible: true
        });
    };
    passwordHandleCancel = () => {
        this.setState({
            passwordVisible: false
        });
    };
}


const ListItem = ({title,children})=>(
    <View className={styles.view1}>
        <span className={styles.span1}>{title}</span>
        {children}
    </View>
)


export default Setting
