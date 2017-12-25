import React, { Component } from "react";
import { View } from "react-web-dom";
import styles from "../../styles/story/detail.css";
import Page from "components/index/page";
import NumberBoard from "components/public/NumberBoard";
import {
    Button,
    Icon,
    Dropdown,
    Menu,
} from "antd";




class Detail extends Component {
    render(){
        return(
            <div>
                <div className={styles.div1}>
                    <Page style={{marginTop:0,marginBottom:0}}>
                        <View className={styles.view1}>
                            <View className={styles.view2}>
                                <p className={styles.p1}>影史上有哪些经典的即兴表演镜头？</p>
                                <p className={styles.p2}>
                                    比如《教父》里，老教父打强尼的脸。
                                    <br/>
                                    比如《蝙蝠侠 黑暗骑士》小丑为戈登升任局长而鼓掌。
                                    <br/>
                                    还有那些呢？
                                </p>
                                <View className={styles.view4}>
                                    <Button type="primary" size={'large'}>
                                        关注问题
                                    </Button>
                                    <Button
                                        icon="edit"
                                        className={styles.button1}
                                        size={'large'}
                                    >
                                        写回答
                                    </Button>
                                    <Button
                                        icon="message"
                                        className={styles.button1}
                                        style={{border:0}}
                                    >
                                        5 条评论
                                    </Button>
                                    <Dropdown
                                        overlay={
                                            <Menu>
                                                <Menu.Item key="1">没有帮助</Menu.Item>
                                                <Menu.Item key="2">举报</Menu.Item>
                                                <Menu.Item key="3">转载</Menu.Item>
                                            </Menu>
                                        }
                                    >
                                        <Button
                                            shape="circle"
                                            icon="ellipsis"
                                            className={styles.button1}
                                            size={'small'}
                                        />
                                    </Dropdown>
                                </View>
                            </View>
                            <View className={styles.view3}>
                                <NumberBoard
                                    title={'关注者'}
                                    number={'3,193'}
                                    style={{borderRight:'1px solid #ccd8e1'}}
                                />
                                <NumberBoard
                                    title={'被浏览'}
                                    number={'4,514,308'}
                                />
                            </View>
                        </View>
                    </Page>
                </div>
            </div>
        )
    }
}




export default Detail
