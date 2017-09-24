import React, { PureComponent } from 'react';
import { View } from "react-web-dom";
import { List, Toast } from "antd-mobile";

const Item = List.Item

export default class UserIndexListMid extends PureComponent{
    componentDidMount(){

    }
    render() {
        const {
            history,
            linkFunc,
            login,
            userInfo
        } = this.props
        const userMidList = [
        //   {
        //       title : '卡券管理',
        //       url:'/user/memberCenter',
        //       thumb : require('../../images/userIndex17.png'),
        //   },
          {
              title : '会员中心',
              url:'/user/memberCenter',
              thumb : require('../../images/userIndex09.png'),
          },{
              title : '我的收藏',
              url:'/user/collect',
              thumb : require('../../images/userIndex10.png'),
          },{
              title : '我的积分',
              url:'/user/integral',
              thumb : require('../../images/userIndex11.png'),
              extra:`${login ? userInfo.points : '0'}`,
          }
        ]
        return(
            <View style={{marginBottom:'0.16rem'}} className='UserIndexListMid'>
                <List className=''>
                    {
                        userMidList.map((userMidListItem,index)=>(
                            <Item
                                key={index}
                                arrow="horizontal"
                                onClick={() => {
                                    if(index===1){
                                        linkFunc(()=>{
                                            history.push(userMidListItem.url)
                                        })
                                    }else {
                                        Toast.offline('开发中',1)
                                    }
                                }}
                                extra={`${userMidListItem.extra ? userMidListItem.extra : ''}`}
                                thumb={userMidListItem.thumb}
                            >
                                <span style={{fontSize:'0.32rem'}}>{userMidListItem.title}</span>
                            </Item>
                        ))
                    }
                </List>
            </View>
        )
    }
}
