import React,{ Component } from 'react';
import {
    View,
} from "react-web-dom";
import styles from '../../style/component/GoodsListRowButton.css';
import { windowWidth } from "../../utils/style";

export default class GoodsListRowButton extends Component {
    render() {
      const data = this.props.data
      const index = this.props.index
    //   console.log('GoodsListRowButton',this.props);
      return (
        <View
          className={styles.list}
          style = {{
              marginRight:`${index%2===0 ? '0.1rem' : undefined}`,
              width:Math.ceil((windowWidth-6.5)/2)
          }}
          onClick = {()=>{
            // NavigatorModule.push(`/mall/MallGoodsDetail/${data.id}`)
          }}
        >
          <View className = {styles.goodsImg} style = {{backgroundImage:`url(${data.img}?x-oss-process=image/resize,m_fill,h_340,w_340)`}}></View>
          <View className= {styles.goodsRightView}>
            <p className= {styles.goodsTitle}> {data.title}</p>
            <View className={styles.bottomInfo} style={{flexDirection:'row',justifyContent:'space-between'}}>
              <span className={styles.priceText}>
                <span style={{fontSize:'0.24rem'}}>¥</span> {data.price}
              </span>
              <span className={styles.leftInfoText}>已售 {data.sale_num}</span>
            </View>
          </View>
        </View>
      )
    }
}
