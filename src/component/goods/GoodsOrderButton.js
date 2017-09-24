import React,{ Component } from 'react';
import {
    Button,
    Toast,
    Modal,
} from "antd-mobile";
import { View } from "react-web-dom";
import style from "../../style/UserOrderListView.css";
import { Fetch } from '../../utils';
import { ThemeStyle } from "../../utils/style";

const alert = Modal.alert;

class GoodsOrderButton extends Component {
    render() {
        const {
            data,
            state,
            id,
            detail
        } = this.props
        let newData = data
        if (detail){
            newData=data[id]
        }
        return (
            <View
                style={{
                    flexDirection:'row',
                    flex:'1',
                    justifyContent: 'flex-end'
                }}
            >
                {
                    state===10 ? <View style={{
                        flexDirection:'row',
                    }}>
                        <Button
                            className={style.shopButtonBtn}
                            style={{
                                backgroundColor:'#fff',
                                color:ThemeStyle.themeColor,
                                border:'1px solid #eaeaea',
                                marginRight:'0.2rem'
                            }}
                            onClick={() => alert('是否取消订单', '', [
                                { text: '取消', onPress: () => console.log('cancel') },
                                {
                                    text: '确定',
                                    onPress: () => new Promise((resolve) => {
                                        resolve()
                                        this._orderCancel(id,newData)
                                    }),
                                },
                            ])}
                        >
                            取消订单
                        </Button>
                        <Button
                            className={style.shopButtonBtn}
                            onClick={this._orderPay.bind(this,newData)}
                        >
                            去付款
                        </Button>
                    </View> :
                    state===20 ? <Button
                        className={style.shopButtonBtn}
                        onClick={ this._mallRefundService.bind(this,newData)}
                    >
                        申请售后
                    </Button> :
                    state===30 ? <Button
                        className={style.shopButtonBtn}
                        onClick={() => alert('确认收货', '', [
                            { text: '取消', onPress: () => console.log('cancel') },
                            {
                                text: '确定',
                                onPress: () => new Promise((resolve) => {
                                    resolve()
                                    this._confirmReceipt(id)
                                }),
                            },
                        ])}
                    >
                        确认收货
                    </Button> : null
                }
            </View>
        )
    }
    _orderCancel(id){
        this._orderChangeState('order_cancel',id)
    }
    _confirmReceipt(id){
        this._orderChangeState('order_receive',id)
    }
    _orderChangeState(state_type,order_id){
        Fetch.fetch('ORDERCHANGESTATE',{state_type,order_id})
            .then((e)=>{
                if(e.errcode===0){
                    if(state_type==='order_cancel'){
                        Toast.success('取消订单成功',1)
                    }else {
                        Toast.success('确认收货成功',1)
                    }
                    this.props.refresh()
                }else{
                    Toast.info(e.errmsg,1)
                }
            })
            .catch((err)=>{

            })
    }
    _orderPay(data){
        this.props.history.push(`/pay?pay_sn=${data.pay_sn}&order_type=goods_buy`)
    }
    _mallRefundService(data){
        this.props.history.push({
            pathname:'/mall/refundType',
            state:{
                id:data.id
            }
        })
    }
}

export default GoodsOrderButton
