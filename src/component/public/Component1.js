import React,{ PureComponent } from "react";
import { ThemeStyle } from "../../utils/style";
import { View } from "react-web-dom";

class Component1 extends PureComponent {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        const { state_desc, integral } = this.props
        return (
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.71rem 0"
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                    }}
                >
                    <img
                        src={require("../../images/orderDetailTopImg.png")}
                        style={{
                            width: "0.5rem",
                            marginRight: "0.19rem"
                        }}
                        alt={'orderDetailTopImg'}
                    />
                    <p style={{ fontSize: "0.36rem", margin: "0" }}>
                        {state_desc}
                    </p>
                </View>
                {
                    integral ?
                    <p style={{
                        fontSize: "0.2rem",
                        margin: "0",
                        marginTop:'0.2rem',
                        color:'#999'
                    }}>
                        本次交易获得积分：
                        <span
                            className={'numberSpan'}
                            style={{
                                color:ThemeStyle.themeColor
                            }}
                        >
                            {integral}
                        </span>
                    </p> : null
                }
            </View>
        )
    }
}

export default Component1
