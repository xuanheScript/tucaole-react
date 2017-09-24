import React,{ Component } from "react";
import { connect } from "react-redux";
import {
    Route,
} from "react-router-dom";
import {View} from "react-web-dom";
import { ThemeStyle, windowHeight, windowWidth } from "../../utils/style";
import { Row, AutoComplete, Input, Button, Icon, Dropdown, Menu, Card } from 'antd';
import styles from '../../styles/index/index.css';


const menu = (
  <Menu>
    <Menu.Item key="1">没有帮助</Menu.Item>
    <Menu.Item key="2">举报</Menu.Item>
    <Menu.Item key="3">转载</Menu.Item>
  </Menu>
);


class Index extends Component {
    render() {
        return (
            <div>
                <div style={{height:52}}>
                    <View className={styles.div2} style={{alignItems:'center',width:windowWidth}}>
                        <View style={{width:1000,flexDirection:'row'}}>
                            <div className={styles.div1}>吐槽了</div>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}} className={'global-search-wrapper'}>
                                <AutoComplete
                                    size="large"
                                    onSearch={(e)=>{}}
                                    placeholder="搜索你感兴趣的内容…"
                                    optionLabelProp="text"
                                    style = {{width:500}}
                                    className="global-search"
                                >
                                    <Input
                                        suffix={
                                            <Button className="search-btn" size="large" type="primary">
                                                <Icon type="search" />
                                            </Button>
                                        }
                                    />
                                </AutoComplete>
                            </View>
                        </View>
                    </View>
                </div>
                <div>
                    <View className={styles.div3} style={{flexDirection:'row'}}>
                        <div className={styles.div4}>
                            <div className={styles.div5}>
                                <View className={styles.div6}>
                                    <p className={styles.p1}>热门内容, 来自: 法律</p>
                                    <p className={styles.p2}>有哪些令人毛骨悚然的案件？</p>
                                    <View className={styles.div7}>
                                        <img
                                            className={styles.img1}
                                            src={'https://pic2.zhimg.com/50/v2-2ba2ff350439f573274e59e1bc7b7119_s.jpg'}
                                            alt={'细思极恐'}
                                        />
                                        <p className={styles.p3}>细思极恐,谣言生于黑心而非愚者，谣言止于良心而非智者！</p>
                                    </View>
                                    <p className={styles.p4}>
                                        我来说几个吧！ 1、不记得哪年看新闻看到的，反正是02年以前了。一女子和丈夫闹矛盾，为了报复其丈夫，用剪刀剪她儿子的丁丁，号称要让那个没良心的断子…
                                    </p>
                                    <View className={styles.div8}>
                                        <Button
                                            type="primary"
                                            icon="caret-up"
                                        >
                                            189
                                        </Button>
                                        <Button
                                            type="primary"
                                            icon="caret-down"
                                            style={{marginLeft:4}}
                                        />
                                        <Button
                                            icon="message"
                                            className={styles.button1}
                                        >
                                            83条评论
                                        </Button>
                                        <Button
                                            icon="share-alt"
                                            className={styles.button1}
                                        >
                                            分享
                                        </Button>
                                        <Button
                                            icon="star"
                                            className={styles.button1}
                                        >
                                            收藏
                                        </Button>
                                        <Button
                                            icon="heart"
                                            className={styles.button1}
                                        >
                                            感谢
                                        </Button>
                                        <Dropdown overlay={menu} >
                                            <Button
                                                shape="circle"
                                                icon="ellipsis"
                                                className={styles.button1}
                                            />
                                        </Dropdown>
                                    </View>
                                </View>
                            </div>
                        </div>
                        <View style={{flex:1}}>
                            <Card style={{padding:0}}>
                                <div>
                                    
                                </div>
                            </Card>
                        </View>
                    </View>
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

export default connect(indexViewFunc)(Index)
