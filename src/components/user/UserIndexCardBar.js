import React, { PureComponent } from 'react';
import { View } from "react-web-dom";
import { windowWidth } from "../../utils/style";
import styles from "../../style/UserIndex.css";


export default class UserIndexCardBar extends PureComponent{
    componentDidMount(){

    }
    render() {
        const { login, userInfo, history, linkFunc } = this.props
        const balance = `${login ? userInfo.available_predeposit : '0.00'}`
        const couponsGrid = [
            {
                title:'账户余额(元)',
                url:'/user/balance',
                balance
            },{
                title:'我的卡券',
                url:'/user/card',
                img:require('../../images/userIndex01.png')
            },{
                title:'激活通道',
                url:'/user/cardActivate',
                img:require('../../images/userIndex02.png')
            }
        ]
        return(
            <View
                style={{
                    flexDirection:'row',
                    width:windowWidth,
                    minHeight:'1.24rem',
                    padding: '0.2rem 0',
                    boxSizing: 'border-box',
                    backgroundColor:'#fff',
                    marginBottom:'0.16rem'
                }}
            >
                {
                    couponsGrid.map((couponsGridItem,index)=>(
                        <View
                            key={index}
                            style={{
                                width:windowWidth/3,
                                alignItems:'center',
                                justifyContent: 'space-between',
                                borderLeft:`${(index+1)%2===0 ? '1px solid #eaeaea' : '0'}`,
                                borderRight:`${(index+1)%2===0 ? '1px solid #eaeaea' : '0'}`
                            }}
                            onClick={()=>{
                                linkFunc(()=>{
                                    history.push(couponsGridItem.url)
                                })
                            }}
                        >
                            {
                                couponsGridItem.balance ?
                                    <span className={styles.couponsGridItemBalance}>
                                        {couponsGridItem.balance}
                                    </span> : undefined
                            }
                            {
                                couponsGridItem.img ?
                                    <img
                                        className={styles.couponsGridItemImg}
                                        src={couponsGridItem.img}
                                        alt={'couponsGridItemImg'}
                                        style={{
                                            width:`${index===1 ? '0.38rem' : '0.33rem'}`
                                        }}
                                    /> : undefined
                            }
                            <p className={styles.couponsGridItemTitle}>{couponsGridItem.title}</p>
                        </View>
                    ))
                }
            </View>
        )
    }
}
