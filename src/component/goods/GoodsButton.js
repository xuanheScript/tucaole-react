import React,{ Component } from 'react';
import { connect } from "react-redux";
import {
    Button,
    Stepper,
    Toast,
} from "antd-mobile";
import { View } from "react-web-dom";
import { ThemeStyle } from "../../utils/style";
import { Fetch, stateHoc } from "../../utils";
import {
    addShopCarGoods,
    _editGoodsNum,
    getShopCartData,
    _delShopCart,
} from "../../actions/shopCart";

@stateHoc({

})
class GoodsButton extends Component {
    hocComponentDidMount() {
        if (this.props.login) {
            this.props.dispatch(getShopCartData());
        }
    }
    render() {
        const {
            data,
            // shopCartData,
            goodsSelfCart,
            goodsCartIndex
        } = this.props;
        // if(goodsSelfCart){
            // console.log('data',this.props);
            // console.log('data',data);
            // console.log('shopCartData',shopCartData);
            // console.log('goodsSelfCart',goodsSelfCart);
            // console.log('goodsCartIndex',goodsCartIndex);
        // }
        // if(this.props.shopCartData[0]){
        //     console.log('GoodsButton',data);
        //     console.log('GoodsButton',shopCartData);
        // }
        // console.log('GoodsButton',this.props);
        return (
            <View
                className='modifyStepper'
                style={{
                    width:'1.64rem',
                    flexDirection: 'inherit',
                    justifyContent: 'flex-end'
                }}
                onClick={(event)=>{
                    event.stopPropagation()
                }}
            >
                {
                    goodsSelfCart ?
                    <Stepper
                        showNumber={true}
                        min={0}
                        max={
                            goodsSelfCart.goods_storage
                        }
                        defaultValue={
                            goodsSelfCart.goods_num
                        }
                        onChange={this._editGoodsNum.bind(
                            this,
                            goodsCartIndex,
                            goodsSelfCart.cart_id,
                        )}
                    /> :
                    <Button
                        onClick={(event)=>{
                            if(this.props.recommend){
                                event.stopPropagation()
                                this.props.dispatch(
                                    addShopCarGoods({
                                        goods_id:data.relation_model_id,
                                        quantity:1
                                    })
                                )
                            }else {
                                event.stopPropagation()
                                this.props.dispatch(
                                    addShopCarGoods({
                                        goods_id:data.id,
                                        quantity:1
                                    })
                                )
                            }
                        }}
                        style={{
                            borderRadius:'50%',
                            height:'auto',
                            backgroundColor:ThemeStyle.themeColor,
                            display: 'flex',
                            alignItems: 'center',
                            border: '0',
                            padding: '0.17rem 0.16rem',
                            boxShadow: '0 0.08rem 0.12rem 0 rgba(156,110,78,.55)'
                        }}
                    >
                        <img
                            src={require('../../images/addToCart.png')}
                            style={{
                                width:'0.32rem'
                            }}
                            alt = {'addToCart'}
                        />
                    </Button>
                }
            </View>
        )
    }
    _editGoodsNum(i, cart_id, quantity) {
        const { dispatch, goodsCheck } = this.props;
        console.log('i',i);
        console.log('cart_id',cart_id);
        console.log('quantity',quantity);
        if(quantity===0){
            this._delShopCart(cart_id,i)
        }else {
            Fetch.fetch("CARTEDIT", { cart_id, quantity }).then(e => {
                if (e.errcode === 0) {
                    dispatch(_editGoodsNum(i, quantity, goodsCheck));
                    dispatch(getShopCartData());
                } else {
                    Toast.show("编辑数据异常", 1);
                }
            })
        }
    }
    _delShopCart(cart_id, i) {
        const { dispatch, shopCartData, goodsCheck } = this.props;

        Fetch.fetch("CARTDEL", { cart_id }).then(e => {
            if (e.errcode === 0) {
                Toast.show("删除成功", 1);
                dispatch(getShopCartData());
            } else {
                Toast.show("删除失败", 1);
            }
        });

        let newShopCartData = [...shopCartData];
        newShopCartData.splice(i, 1);

        let newGoodsCheck = [...goodsCheck];
        newGoodsCheck.splice(i, 1);

        dispatch(_delShopCart(newShopCartData, newGoodsCheck));
    }
}


const getShopCartDataFunc = store => {
    const {view,app} = store
    const { shopCartIndex } = view
    const { user } = app
    return {
        goodsCheck: shopCartIndex.goodsCheck,
        login: user.login
    }
}

export default connect(getShopCartDataFunc)(GoodsButton);
