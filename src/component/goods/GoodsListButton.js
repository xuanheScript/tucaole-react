import React,{ Component } from 'react';
import { View } from "react-web-dom";
import styles from '../../style/component/GoodsListButton.css';
import GoodsButton from "./GoodsButton";

class GoodsListButton extends Component {
    render() {
        const {data} = this.props
        let goodsSelfCart = null
        let goodsCartIndex = null
        this.props.shopCartData.map((item,index)=>{
            if(this.props.recommend){
                if(data.relation_model_id === item.goods_id){
                    goodsSelfCart=item
                    goodsCartIndex=index
                }
            }else {
                if(data.id === item.goods_id){
                    goodsSelfCart=item
                    goodsCartIndex=index
                }
            }
            return true
        })
        return (
            <View
                className={`${styles.listWarp} listWarp`}
                style={{padding: '0 0.3rem'}}
                onClick = {()=>{
                    if(this.props.recommend){
                        this.props.history.push(`/mall/goodsDetail/${data.relation_model_id}`)
                    }else {
                        this.props.history.push(`/mall/goodsDetail/${data.id}`)
                    }
                }}
            >
                <View className={`${styles.list} list`} style={{flexDirection:'row'}}>
                    <View
                        className = {styles.goodsImg}
                        style = {{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img src={data.img} alt='goodsImg'/>
                    </View>
                    <View
                        className= {styles.goodsRightView}
                        style={{justifyContent: 'space-around'}}
                    >
                        <View>
                            <p className= {styles.goodsTitle} >{data.title}</p>
                            <p className= {styles.goodsDesc} >{data.desc ? data.desc : '暂无描述'}</p>
                        </View>
                        <View
                            className= {styles.goodsInfoView}
                            style={{flexDirection:'row',justifyContent: 'space-between'}}
                        >
                            <View
                                className={styles.leftInfo}
                                style={{flexDirection:'row',alignItems:'center'}}
                            >
                                <span
                                    className={`numberSpan ${styles.presentPrice}`}
                                >
                                    <span style={{fontSize:'0.22rem'}}>¥ </span>
                                    {data.price}
                                </span>
                            </View>
                            <GoodsButton
                                {...this.props}
                                goodsSelfCart={goodsSelfCart}
                                goodsCartIndex={goodsCartIndex}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default GoodsListButton
