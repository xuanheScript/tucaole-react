import React, { Component, PropTypes } from "react";
import {
    Layout,
    Menu,
    Breadcrumb,
    Icon,
    AutoComplete,
    Button,
    Input,
    Popover,
} from "antd";
import { ThemeStyle, windowHeight, windowWidth } from "../../../utils/style";
import styles from "../../../styles/index/index.css";
import { View } from "react-web-dom";
import { connect } from "react-redux";
import { push , goBack } from 'react-router-redux'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class IndexHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ height: 52 }}>
                <View
                    className={styles.div2}
                    style={{ alignItems: "center", width: windowWidth }}
                >
                    <View style={{ width: 1000, flexDirection: "row" }}>
                        <View
                            className={styles.div1}
                            onClick={() => {
                                this.props.dispatch(push("/"))
                            }}
                        >
                            <img
                                src={require("../../../images/logo.png")}
                                height={42}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            className={"global-search-wrapper"}
                        >
                            <AutoComplete
                                size="large"
                                onSearch={e => {}}
                                placeholder="搜索你感兴趣的内容…"
                                optionLabelProp="text"
                                style={{ width: 500 }}
                                className="global-search"
                            >
                                <Input
                                    suffix={
                                        <Button
                                            className="search-btn"
                                            size="large"
                                            type="primary"
                                        >
                                            <Icon type="search" />
                                        </Button>
                                    }
                                />
                            </AutoComplete>
                        </View>
                        <View className={styles.view2}>
                            <Button
                                type="primary"
                                shape="circle"
                                icon="bell"
                                className={styles.button2}
                            />
                            <Popover
                                content={
                                    <View>
                                        <View
                                            className={styles.view3}
                                            onClick={() => {
                                                this.props.dispatch(push("/user/profileEdit"))
                                            }}
                                        >
                                            <Icon type="user" style={{fontSize:14,marginRight:5}}/>
                                            个人资料
                                        </View>
                                        <View
                                            className={styles.view3}
                                            onClick={() => {
                                                this.props.dispatch(push("/user/setting"))
                                            }}
                                        >
                                            <Icon type="setting" style={{fontSize:14,marginRight:5}}/>
                                            设置
                                        </View>
                                        <View
                                            className={styles.view3}
                                            onClick={() => {
                                                this.props.dispatch(push("/user/login"))
                                            }}
                                        >
                                            <Icon type="poweroff" style={{fontSize:14,marginRight:5}}/>
                                            退出登录
                                        </View>
                                    </View>
                                }
                                placement = {'bottom'}
                            >
                                <img
                                    src={require('../../../images/defaultAvatar.jpg')}
                                    className={styles.img2}
                                />
                            </Popover>
                        </View>
                    </View>
                </View>
            </div>
        );
    }
}


const mapStateToProps = store => {
    return {
        router: store.router
    };
};

export default connect(mapStateToProps)(IndexHeader)
