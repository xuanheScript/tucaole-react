import React, { Component } from 'react';
import { View } from "react-web-dom";
import styles from "../../style/UserIndex.css";
import { giftIfShow } from "../../actions/user/giftData";

export default class UserIndexGift extends Component{
    render() {
        const { history, id } = this.props
        return(
            <View
                className={styles.userIndexBottom}
                style={{
                    flexDirection: "row",
                    alignItems:'center',
                    justifyContent: 'space-around',
                }}
                onClick={(event)=>{
                    event.stopPropagation()
                    history.push(`/user/actualReceive?id=${id}`)
                }}
            >
                <img src={require('../../images/userIndex15.png')} alt={'userIndex15'}/>
                <p>你有未领取的卡券套餐哦~ <span>点击领取</span></p>
                <View
                    className={styles.bottomClose}
                    onClick={()=>{
                        this.props.dispatch(giftIfShow(false))
                    }}
                >
                    <img
                        src={require('../../images/userIndex16.png')}
                        alt={'userIndex16'}
                    />
                </View>
            </View>
        )
    }
}
