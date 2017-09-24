import React,{ PureComponent } from "react";
import styles from "../../style/HomeIndex.css";
import { windowWidth } from "../../utils/style";
import { View } from "react-web-dom";
import { stateHoc } from "../../utils";
import { connect } from "react-redux";
import { Toast } from 'antd-mobile';

@stateHoc({
    height: 200
})
class HomeTopGrid extends PureComponent {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const {data} = this.props
        const {index_category} = data
        const {jump} = data
        const icons = [
            {
                img: require("../../images/homeBtn01.png"),
                title: "特色吃法",
                id: index_category[0]&&index_category[0].id,
            },
            {
                img: require("../../images/homeBtn02.png"),
                title: "四季搭配",
                id: index_category[1]&&index_category[1].id,
            },
            {
                img: require("../../images/homeBtn03.png"),
                title: "养生保健",
                id: index_category[2]&&index_category[2].id,
            },
            {
                img: require("../../images/homeBtn04.png"),
                title: "产地直播",
                id: 11
            }
        ];
        return (
            <View
                className={styles.sortOne}
                style={{
                    width: windowWidth,
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    minHeight: "2rem"
                }}
            >
                {icons.map((sortItem, index) => {
                    return (
                        <View
                            className={styles.sortOneItem}
                            key={index}
                            onClick={() => {
                                if(index===3){
                                    document.location.href = jump
                                }else {
                                    if(sortItem.id){
                                        this.props.history.push({
                                            pathname: "/home/infoListView",
                                            search: `?id=${sortItem.id}&title=${sortItem.title}`
                                        })
                                    }else {
                                        Toast.fail('id参数异常',1)
                                    }
                                }
                            }}
                            style={{
                                width: windowWidth / icons.length,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <View className={styles.homebtnsize}>
                                <img
                                    src={sortItem.img}
                                    className={styles.homebtnimg}
                                    alt={'homebtnimg'}
                                />
                            </View>
                            <p>{sortItem.title}</p>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const mapStateToProps = ({app}) => {
    const {
        appBasisData,
        appBasisDataFetchStatus
    } = app.appInitial
    return {
        data: appBasisData,
        fetchStatus: appBasisDataFetchStatus
    };
};

export default connect(mapStateToProps)(HomeTopGrid)
