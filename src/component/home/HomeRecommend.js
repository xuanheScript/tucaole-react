import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styles from "../../style/HomeIndex.css";
import { GoodsListButton } from "../goods";
import { getHomeRecommendData } from "../../actions/home";
import { stateHoc } from "../../utils";
import { View } from "react-web-dom";

@stateHoc({
    height: 200
})
class HomeRecommend extends PureComponent {
    hocComponentDidMount() {
        if (!this.props.data.length) {
            this.props.dispatch(getHomeRecommendData());
        }
    }
    hocNullDataFunc() {
        return this.props.data.length === 0
    }
    render() {
        return (
            <View
                style={{
                    marginTop: "0.16rem",
                    minHeight: 121 * this.props.data.length + 73
                }}
            >
                <View
                    className={styles.homeColumn}
                    style={{
                        alignItems: "center"
                    }}
                >
                    <p>精品推荐</p>
                    <span />
                </View>
                <View style={{ backgroundColor: "#fff" }}>
                    {this.props.data.map((item, index) => (
                        <GoodsListButton
                            {...this.props}
                            key={index}
                            data={item}
                            recommend
                        />
                    ))}
                </View>
            </View>
        );
    }
}

const mapStateToProps = store => {
    const { homeIndex } = store.view;
    return {
        data: homeIndex.recommendData,
        fetchStatus: homeIndex.recommendDataFetchStatus
    };
};

export default connect(mapStateToProps)(HomeRecommend);
