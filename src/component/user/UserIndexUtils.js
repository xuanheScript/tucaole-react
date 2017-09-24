import React, { PureComponent } from 'react';
import {
    View,
} from "react-web-dom";
import { ThemeStyle, windowWidth, windowHeight, rem } from "../../utils/style";
import styles from "../../style/UserIndex.css";


export default class UserIndexUtils extends PureComponent{
    componentDidMount(){

    }
    render() {
        const { history, linkFunc } = this.props
        const userShopToolArray = [
            {
                title : '我的设置',
                image : require('../../images/user001.png'),
                keyname: 'settings',
            },{
                title : '',
                image : require('../../images/homeTopLeft.png'),
                keyname: null,
                style: {width: '1.03rem',height:'0.32rem'},
            },{
                title : '我的评价',
                image : require('../../images/user002.png'),
                keyname: 'evaluate',
            },{
                title : '邀请好友',
                image : require('../../images/user003.png'),
                keyname: 'invite',
            },{
                title : '我要吐槽',
                image : require('../../images/user004.png'),
                keyname: 'complaints',
            },{
                title : '购买须知',
                image : require('../../images/user005.png'),
                keyname: 'notesToBuy',
            }
        ]
        return(
            <View
                className={styles.userBottom}
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {
                    userShopToolArray.map((item,index)=>{
                        return(
                            <View
                                key={`userBottom${index}`}
                                style={{
                                    width:(windowWidth-3)/3,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                className={styles.userBottomBtn}
                                onClick={()=>{
                                    linkFunc(()=>{
                                        if(item.keyname){
                                            history.push(`/user/${item.keyname}`)
                                        }
                                    })
                                }}
                            >
                                {
                                    item.title!='' ?
                                        <img
                                            src = {item.image}
                                            className={styles.btnImage}
                                            // style={{width:'0.6rem'}}
                                        /> :
                                        <View
                                            className={styles.logoSquare}
                                            style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <img
                                                src = {item.image}
                                                className={styles.btnImage}
                                                style={item.style}
                                            />
                                        </View>
                                }
                                {
                                    item.title!='' ?
                                        <p
                                            className = {styles.btnText}
                                            // style={{fontSize:'0.24rem'}}
                                        >
                                            {item.title}
                                        </p> : null
                                }
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}
