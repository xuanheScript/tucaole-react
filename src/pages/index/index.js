import React,{ Component } from "react";
import { connect } from "react-redux";
import {
    Route,
} from "react-router-dom";
import {View} from "react-web-dom";
import { ThemeStyle, windowHeight, windowWidth } from "../../utils/style";
import { Row, AutoComplete, Input, Button, Icon, Dropdown, Menu, Card, Col } from 'antd';
import styles from '../../styles/index/index.css';


const menu = (
  <Menu>
    <Menu.Item key="1">没有帮助</Menu.Item>
    <Menu.Item key="2">举报</Menu.Item>
    <Menu.Item key="3">转载</Menu.Item>
  </Menu>
);


const menu2 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
    </Menu.Item>
  </Menu>
);


class Index extends Component {
    render() {
        return (
            <div>
                <div style={{height:52}}>
                    <View className={styles.div2} style={{alignItems:'center',width:windowWidth}}>
                        <View style={{width:1000,flexDirection:'row'}}>
                            <View className={styles.div1}>
                                <img src={require('../../images/logo.png')} height={42}/>
                            </View>
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
                            <View className={styles.view2}>
                                <Button type="primary" shape="circle" icon="bell" className={styles.button2}/>
                                <img
                                    src={'https://pic1.zhimg.com/da8e974dc_im.jpg'}
                                    className={styles.img2}
                                    onClick = {()=>{
                                        this.props.history.push('/user/login')
                                    }}
                                />
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
                                        依稀记得10年前，那时候父亲的工资每个月还只有3000多，一辆凯美瑞却需要20多万，可是到了现在，工资倍增不说，奥迪却卖到了不足20万，不得不说，咱们的生活品质…
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
                                    <Row>
                                        {
                                            [1,2,3,4,5,6].map((data,i)=>(
                                                <Col lg={8} key={i} style={{marginBottom:i<3?25:0}}>
                                                    <Dropdown overlay={menu2}>
                                                        <View className={styles.view1}>
                                                            <Icon type="hdd" style={{marginBottom:10,fontSize:20}}/>
                                                            <span style={{color:ThemeStyle.themeColor}}>Live</span>
                                                        </View>
                                                    </Dropdown>
                                                </Col>
                                            ))
                                        }
                                    </Row>
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
