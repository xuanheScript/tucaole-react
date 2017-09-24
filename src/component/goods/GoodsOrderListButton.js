import React,{ Component } from "react";
import { View, Text } from "react-web-dom";
import styles from "../../style/component/OrderGoodsListButton.css";

class GoodsOrderListButton extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    componentDidMount() {

    }
    render() {
        // console.log('GoodsOrderListButton',this.props);
        const { goodsData } = this.props
        return (
            <View className={styles.listViewMod1}>
                <View
                    className={styles.goodsList}
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <View
                        className={styles.goodsListImgWarp}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={goodsData.goods_img}
                            className={styles.goodsListImg}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '1.8rem',
                                maxHeight: '1.8rem',
                            }}
                            alt={'goodsListImg'}
                        />
                    </View>
                    <View
                        className={styles.goodsListInfoView}
                        style={{
                            justifyContent: 'space-around'
                        }}
                    >
                        <Text className={styles.goodsDetailTitleText}>{goodsData.goods_title}</Text>
                        <Text className={styles.goodsDetailTitleTextBadge}>
                            规格：
                            {
                                goodsData.goods_spec&&goodsData.goods_spec.length>0 ?
                                goodsData.goods_spec.map((item,index)=>{return item }) : '暂无规格'
                            }
                        </Text>
                        <View
                            className={styles.goodsDetailBottomView}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Text className={styles.goodsDetailPrice}>
                                <span style={{fontSize: '0.04rem'}}>¥</span>
                                <span className={'numberSpan'}> {goodsData.goods_price}</span>
                            </Text>
                            <Text className={`${styles.Text4num} numberSpan`}>
                                x{goodsData.goods_num}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

export default GoodsOrderListButton;
