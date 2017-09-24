import React, { PureComponent } from 'react';
import { View } from "react-web-dom";
import { Badge, List, Toast } from "antd-mobile";
import styles from "../../style/UserIndex.css";

const Item = List.Item

export default class UserIndexOrderBar extends PureComponent{
    componentDidMount(){

    }
    render() {
        const {
            orderNum,
            history,
            linkFunc
        } = this.props
        const {
            order_noeval,
            order_nopay,
            order_noreceiving,
            order_nosend,
            order_refund
        } = orderNum;

        const userOrderToolArray = [
          {
              title : '待付款',
              image : require('../../images/userIndex04.png'),
              dotCount:order_nopay,
          },{
              title : '待发货',
              image : require('../../images/userIndex07.png'),
              dotCount:order_nosend,
          },{
              title : '待收货',
              image : require('../../images/userIndex05.png'),
              dotCount:order_noreceiving,
          },{
              title : '已完成',
              image : require('../../images/userIndex06.png'),
              dotCount:order_noeval,
          }
        ]
        return(
            <View style={{marginBottom:'0.16rem'}} className='OrderBar'>
                <List className='OrderBarList'>
                    <Item
                        arrow="horizontal"
                        onClick={() => {
                            linkFunc(()=>{
                                history.push({
                                    pathname: '/user/order',
                                    state: { key:'0' }
                                })
                            })
                        }}
                        extra="查看全部订单"
                        thumb={require('../../images/userIndex03.png')}
                    >
                        <span style={{fontSize:'0.32rem'}}>我的订单</span>
                    </Item>
                </List>
                <View
                    style={{
                        height:'1.6rem',
                        // justifyContent:'space-around',
                        // alignItems: 'center',
                        backgroundColor:'#fff',
                        flexDirection:'row',
                    }}
                >
                    <View
                        style={{
                            justifyContent:'space-around',
                            alignItems: 'center',
                            flexDirection:'row',
                            flex:'1'
                        }}
                    >
                        {
                            userOrderToolArray.map((item,index)=>(
                                <View
                                    className={`${styles.mod1Button} badgeWarp`}
                                    key={`mod1Button${index}`}
                                    onClick = {()=>{
                                        linkFunc(()=>{
                                            history.push({
                                                pathname: '/user/order',
                                                state: { key:`${index+1}` }
                                            })
                                        })
                                    }}
                                    style={{
                                        justifyContent:'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Badge text={item.dotCount}>
                                        <img
                                            src = {item.image}
                                            className={styles.mod1ButtonImage}
                                            style={{width:'0.4rem'}}
                                            alt={'mod1ButtonImage'}
                                        />
                                    </Badge>
                                    <span
                                        className={styles.mod1ButtonText}
                                    >
                                        {item.title}
                                    </span>
                                </View>
                            ))
                        }
                    </View>
                    <View
                        style={{
                            justifyContent:'center',
                            alignItems: 'center',
                        }}
                    >
                        <p
                            style={{
                                margin:'0',
                                height:'40%',
                                width:'0.02rem',
                                backgroundColor:'#eaeaea'
                            }}
                        ></p>
                    </View>
                    <View
                        className={`${styles.mod1Button} badgeWarp`}
                        onClick = {()=>{
                            Toast.offline('开发中',1)
                            // linkFunc(()=>{
                            //     history.push('/mall/refund')
                            // })
                        }}
                        style={{
                            justifyContent:'center',
                            alignItems: 'center',
                            width:'25%'
                        }}
                    >
                        <Badge text={order_refund}>
                            <img
                                src = {require('../../images/userIndex08.png')}
                                className={styles.mod1ButtonImage}
                                style={{width:'0.4rem'}}
                                alt={'mod1ButtonImage'}
                            />
                        </Badge>
                        <span
                            className={styles.mod1ButtonText}
                        >
                            退款/售后
                        </span>
                    </View>
                </View>
            </View>
        )
    }
}
