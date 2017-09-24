import React, { PureComponent } from 'react';
import { View } from "react-web-dom";
import { List } from "antd-mobile";

const Item = List.Item;
// const alert = Modal.alert;

class UserIndexListBot extends PureComponent{
    render() {
        const {
            history,
            linkFunc,
            settingData
        } = this.props
        const {
            value,
        } = settingData.basic_service_tel
        const userBotList = [
          {
              title : '地址管理',
              url:'/user/address',
              thumb : require('../../images/userIndex12.png'),
          },{
              title : '联系客服',
              url:`${value}`,
              thumb : require('../../images/userIndex13.png'),
              extra:'服务时间：8:00-21:00',
          },{
              title : '设置',
              url:'/user/settings',
              thumb : require('../../images/userIndex14.png'),
          }
        ]
        return(
            <View style={{marginBottom:'0.16rem'}} className='UserIndexListBot'>
                <List className=''>
                    {
                        userBotList.map((userBotListItem,index)=>(
                            <Item
                                key={index}
                                arrow="horizontal"
                                onClick={() => {
                                    if(index!==1){
                                        linkFunc(()=>{
                                            history.push(userBotListItem.url)
                                        })
                                    }else {
                                        // alert('拨打电话', `${userBotListItem.url}`, [
                                        //     { text: '取消', onPress: () => console.log('cancel') },
                                        //     { text: '拨打', onPress: () =>
                                        //         window.location.href = `tel://${userBotListItem.url}`
                                        //     },
                                        // ])
                                        window.location.href = `tel://${userBotListItem.url}`
                                    }
                                }}
                                extra={`${userBotListItem.extra ? userBotListItem.extra : ''}`}
                                thumb={userBotListItem.thumb}
                            >
                                <span style={{fontSize:'0.32rem'}}>{userBotListItem.title}</span>
                            </Item>
                        ))
                    }
                </List>
            </View>
        )
    }
}

export default UserIndexListBot
