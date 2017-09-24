import React, { Component } from "react";
import PropTypes from "prop-types";
import { Carousel, Toast } from "antd-mobile";

class GoodsSwiperImage extends Component {
    static propTypes = {
        data: PropTypes.array,
        isWXAppInitialize : PropTypes.bool,
    };
    static defaultProps = {
        data: [],
        isWXAppInitialize : false,
    };
    constructor(props) {
        super(props);
        this.state = {
            data: ["", "", ""],
            initialHeight: 200
        };
    }
    render() {
        const hProp = this.state.initialHeight
            ? { height: this.state.initialHeight }
            : {};
        const {isWXAppInitialize,data} = this.props
        let imagesArray = []
        data.map((e)=>{
            return imagesArray.push(e.img)
        })
        return (
            <Carousel
                className="goods-carousel"
                autoplay={this.props.data.length > 1}
                infinite
                // selectedIndex={1}
                swipeSpeed={35}
                dotStyle={{ backgroundColor: "#ccc" }}
                dotActiveStyle={{
                    backgroundColor: "#9c6e4e",
                    width: "0.36rem",
                    borderRadius: "1rem"
                }}
            >
                {
                    imagesArray.map((e,index,dataSource) => (
                        <a key={index} style={hProp}>
                            <img
                                src={`${e}?x-oss-process=image/resize,m_fill,h_750,w_750`}
                                alt="icon"
                                onLoad={() => {
                                    window.dispatchEvent(new Event("resize"));
                                    this.setState({
                                        initialHeight: null
                                    });
                                }}
                                onClick = {()=>{
                                    if(isWXAppInitialize){
                                        global.wx.previewImage({
                                            current: e,
                                            urls: imagesArray,
                                            fail: ()=>{
                                                Toast.fail('查看大图失败',1)
                                            }
                                        });
                                    }else {
                                        Toast.fail('微信sdk初始化异常，不支持查看大图',1)
                                    }
                                }}
                            />
                        </a>
                    ))
                }
            </Carousel>
        );
    }
}

export default GoodsSwiperImage;
