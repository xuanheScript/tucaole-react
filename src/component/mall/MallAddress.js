import React,{ Component } from "react";
import {
    Icon,
    Toast,
    ActionSheet,
} from "antd-mobile";
import { View } from "react-web-dom";
import style from "../../style/UserAddress.css";
import { getMallAddressListData } from "../../actions/mall/mallAddress"
import { Fetch } from '../../utils';

const BUTTONS = ['更改收货地址','编辑此收货地址','取消']

class MallAddress extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    componentDidMount() {

    }
    render() {
        const { addressData, leftShow, rightShow, arrow, showActionSheet} = this.props
        return (
            <View
                className={style.addressList}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                onClick = {()=>{
                    if(showActionSheet){
                        ActionSheet.showActionSheetWithOptions(
                            {
                                options: BUTTONS,
                                cancelButtonIndex: BUTTONS.length - 1,
                                message: "请选择",
                            },
                            (index) => {
                                switch (index) {
                                    case 0:
                                        this.props.history.push({
                                            pathname: '/user/address',
                                            state: { goBack: true }
                                        })
                                        break;
                                    case 1:
                                        this.props.history.push(`/user/editAddress/${addressData.id}`)
                                        break;
                                    default:

                                }
                            }
                        )
                    }
                }}
            >
                {
                    leftShow ?
                        addressData.is_default === 1 ?
                            <img
                                src={require('../../images/checked.png')}
                                className={style.addressCheckIcon}
                                alt = {'checked'}
                            /> :
                            <img
                                src={require('../../images/check.png')}
                                className={style.addressCheckIcon}
                                onClick = {()=>{
                                    this._setDefaultAddress(addressData.id)
                                }}
                                alt = {'check'}
                            />
                     : null
                }
                <View
                    className={style.addressText}
                    style={{
                        justifyContent: 'center'
                    }}
                >
                    <View
                        className={style.addressTop}
                        style={{flexDirection:'row'}}
                    >
                        <p className={style.addressTruename}>
                            {addressData.truename}
                        </p>
                        <p className={style.addressInterval}>丨</p>
                        <p className={`numberSpan ${style.addressMobile}`}>
                            {addressData.mob_phone}
                        </p>
                    </View>
                    <View
                        className={style.addressInfo}
                        style={{
                            flexDirection:'row',
                            alignItems: 'center'
                        }}
                    >
                        <span>
                            {
                                addressData.type===1 ? '个人' :
                                addressData.type===2 ? '公司' : '其他'
                            }
                        </span>
                        <p>{addressData.area_info}{addressData.address}</p>
                    </View>
                </View>
                {
                    arrow ? <Icon type='right' style={{color:'#ccc'}}/> : null
                }
                {
                    rightShow ?
                    <img
                        src={require('../../images/editAddress.png')}
                        onClick={()=>{
                            this.props.history.push(`/user/editAddress/${addressData.id}`)
                        }}
                        className={style.addressEdit}
                        alt = {'addressEdit'}
                    /> : null
                }
            </View>
        )
    }
    _setDefaultAddress(id){
        const {routeState} = this.props
        Fetch.fetch('ADDRESSSETDEFAULT',{id})
        .then((e)=>{
            if(e.errcode===0){
                this.props.dispatch(getMallAddressListData())
                if(routeState&&routeState.goBack){
                    this.props.history.goBack()
                }else {
                    Toast.success('成功设为默认地址',1);
                }
            }
        })
    }
}

export default MallAddress
