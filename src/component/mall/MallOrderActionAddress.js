import React,{ Component } from "react";
import { View } from "react-web-dom";
import styles from "../../style/UserAddress.css";
import MallAddress from "./MallAddress";

class MallAddressInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    componentDidMount() {

    }
    render() {
        const { addressData } = this.props
        return (
            <View
                onClick={()=>{
                    if(this.props.clickOk){
                        this.props.history.push({
                            pathname:'/user/address',
                            state:{
                                goBack:true
                            }
                        })
                    }
                }}
                style={{marginBottom:'0.16rem'}}
            >
                {
                    addressData ?
                    <MallAddress
                        addressData={addressData}
                        rightShow
                        {...this.props}
                    />
                    :
                    <View
                        className={styles.locationEmptyWarp}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <p className={styles.locationEmpty}>
                            添加地址
                        </p>
                    </View>
                }
            </View>
        )
    }
}

export default MallAddressInfo;
