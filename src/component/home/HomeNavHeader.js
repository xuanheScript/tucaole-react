import React,{ PureComponent } from "react";
import { SearchBar } from "antd-mobile";
import { ThemeStyle } from "../../utils/style";
import { View } from "react-web-dom";

class HomeNavHeader extends PureComponent {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0 0.3rem",
                    backgroundColor: ThemeStyle.themeColor
                }}
                className="HomeNavHeader"
            >
                <img
                    src={require("../../images/homeTopLeft.png")}
                    style={{
                        width: "1rem",
                        height: "0.3rem",
                        marginRight: "0.3rem"
                    }}
                    alt={'homeTopLeft'}
                />
                <SearchBar
                    placeholder="搜索"
                    style={{
                        flex: "1",
                        backgroundColor: ThemeStyle.themeColor
                    }}
                    onFocus={() => {
                        this.props.history.push("/mall/search");
                    }}
                />
            </View>
        );
    }
}

export default HomeNavHeader;
