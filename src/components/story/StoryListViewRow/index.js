import React, { Component } from "react";
import { View } from "react-web-dom";
import styles from "./index.css";
import {
    Button,
    Dropdown,
    Menu,
} from "antd";


export default class StoryListViewRow extends Component {
    render(){
        return(
            <View className={styles.view1}>
                <View className={styles.view2}>
                    <View className={styles.view3}>
                        <img
                            className={styles.img1}
                            src={'https://pic3.zhimg.com/aadd7b895_xs.jpg'}
                        />
                    </View>
                    <View className={styles.view4}>
                        <div style={{lineHeight:1.1}}><a className={styles.a1}>熊宁</a></div>
                        <div className={styles.div1}>你总有一壶酒，还总要听故事，你是坐台的么，又要喝酒还特么要听吹逼</div>
                    </View>
                </View>
                <View className={styles.view5}>
                    <span><a className={styles.a2}>1,662 人赞同了该回答</a></span>
                </View>
                <div className={styles.div2}>
                    <p>马云的话是很睿智的，睿智不是因为他聪明，而是因为他获得的资源和讯息比你多。特别是随着他的产业越来越大，和国家合作越来越紧密，在后面见美国总统等事后，他释放的信息的能量是很大的。</p>
                </div>
                <View className={styles.view6}>
                    <span><a className={styles.a3}>发布于 2017-12-18</a></span>
                </View>
                <View className={styles.view7}>
                    <Button
                        type='primary'
                        size='large'
                        icon="caret-up"
                    >
                        176
                    </Button>
                    <Button
                        type='primary'
                        size='large'
                        icon="caret-down"
                        style={{marginLeft:4}}
                    />
                    <Button
                        icon="message"
                        className={styles.button1}
                        style={{border:0,marginLeft:10}}
                    >
                        531 条评论
                    </Button>
                    <Button
                        icon="star"
                        className={styles.button1}
                        style={{border:0}}
                    >
                        收藏
                    </Button>
                    <Dropdown
                        overlay={
                            <Menu>
                                <Menu.Item key="1">没有帮助</Menu.Item>
                                <Menu.Item key="2">举报</Menu.Item>
                            </Menu>
                        }
                    >
                        <Button
                            shape="circle"
                            icon="ellipsis"
                            className={styles.button1}
                            size={'small'}
                            style={{marginLeft:15}}
                        />
                    </Dropdown>
                </View>
            </View>
        )
    }
}
