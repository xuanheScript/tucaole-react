import React, { PureComponent } from 'react';
import { List } from "antd-mobile";

const Item = List.Item;
const Brief = Item.Brief;

export default class UserIndexTop extends PureComponent{
    componentDidMount(){

    }
    render() {
        const { login, userInfo, history, linkFunc } = this.props
        // const { avatar, nickname, phone } = userInfo
        return(
            <List
                className='userTopList'
                style={{marginBottom:'0.16rem'}}
            >
                <Item
                    arrow="horizontal"
                    thumb={
                        login ?
                            userInfo.avatar ? userInfo.avatar : require('../../images/defaultAvatar.png')
                        : require('../../images/defaultAvatar.png')
                    }
                    multipleLine
                    onClick={() => {
                        linkFunc(()=>{
                            history.push('/user/personalInfo')
                        })
                    }}
                >
                    <span className='username'>{login&&userInfo.nickname ? userInfo.nickname : '默认昵称'}</span>
                    <Brief>
                        <span className={`numberSpan ${
                            login&&userInfo.phone ? 'userPhone' : 'phone'
                        }`}>
                            {
                                login&&userInfo.phone ? userInfo.phone : '未绑定手机'
                            }
                        </span>
                    </Brief>
                </Item>
            </List>
        )
    }
}
