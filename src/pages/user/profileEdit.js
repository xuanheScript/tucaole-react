import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { View } from "react-web-dom";
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
    Upload,
} from "antd";
import styles from "../../styles/user/profileEdit.css";
import Header from "../../component/index/header";
import Page from "../../component/index/page";




class ProfileEdit extends Component {
    render() {
        return (
            <div>
                <Header />
                <Page>
                    <Card bodyStyle={{padding:0}}>
                        <View className={styles.view1}>
                            <Upload className={styles.upload1}>
                                <Button size={'large'}>
                                    <Icon type="camera-o" style={{fontSize:18}}/>上传封面图片
                                </Button>
                            </Upload>
                        </View>
                        <View className={styles.view2}>
                            <Upload>
                                <View className={styles.view3}>
                                    <View className={styles.view5}>
                                        <Icon type="camera" style={{fontSize:35,color:'#fff'}}/>
                                        <span className={styles.span1}>修改我的头像</span>
                                    </View>
                                </View>
                            </Upload>
                        </View>
                    </Card>
                </Page>
            </div>
        );
    }
}

const indexViewFunc = store => {
    const { shopCartIndex } = store.view;
    return {
        login: store.app.user.login
    };
};

export default connect(indexViewFunc)(ProfileEdit);
