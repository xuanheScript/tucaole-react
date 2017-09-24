import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Carousel,Toast } from "antd-mobile";
import { getHomeSwiperData } from "../../actions/home";
import { stateHoc } from "../../utils";
import styles from "../../style/HomeIndex.css";
import { windowWidth } from "../../utils/style";

@stateHoc({
    height: 200
})
class HomeSwiperImage extends PureComponent {
    static propTypes = {
        data: PropTypes.array
    };
    static defaultProps = {
        data: []
    };
    hocComponentDidMount() {
        if (!this.props.data.length) {
            this.props.dispatch(getHomeSwiperData());
        }
    }
    hocNullDataFunc() {
        return this.props.data.length === 0
    }
    render() {
        const { data } = this.props;
        return (
            <Carousel
                className={styles.homeCarousel}
                autoplay={this.props.data.length > 1}
                infinite
                selectedIndex={0}
                swipeSpeed={35}
                dotStyle={{ backgroundColor: "#ccc" }}
                dotActiveStyle={{
                    backgroundColor: "#9c6e4e",
                    width: "0.36rem",
                    borderRadius: "1rem"
                }}
            >
                {
                    data.map((item,index) => (
                        <img
                            key={index}
                            src={`${item.img}?x-oss-process=image/resize,w_680`}
                            alt="icon"
                            onClick={()=>{
                                switch (item.relation_model) {
                                    case 'goods':
                                        this.props.history.push(`/mall/goodsDetail/${item.relation_model_id}`)
                                        break;
                                    default:
                                        Toast.info('未知的事件类型',1)
                                }
                            }}
                            style={{
                                width:windowWidth,
                            }}
                        />
                    ))
                }
            </Carousel>
        );
    }
}

const mapStateToProps = store => {
    const { homeIndex } = store.view;
    return {
        data: homeIndex.swiperData,
        fetchStatus: homeIndex.swiperDataFetchStatus
    };
};

export default connect(mapStateToProps)(HomeSwiperImage);
