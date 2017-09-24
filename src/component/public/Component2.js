import React,{ PureComponent } from "react";
import styles from "../../style/MallOrderDetail.css";
import { View } from "react-web-dom";
import { publicFunction } from "../../utils";

const { DateFormat } = publicFunction;

class Component2 extends PureComponent {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        const { timeList, different } = this.props
        return (
            <View className={styles.orderActionBottom3}>
                {
                    timeList.map((timeListItem,index)=>(
                        <p key={index}>
                            <span>{timeListItem.title}：</span>
                            <span
                                className={'numberSpan'}
                                style={{
                                    color:`${different ? '#333' : '#999'}`
                                }}
                            >
                                {
                                    timeListItem.time ?
                                    DateFormat(
                                        timeListItem.time,
                                        "yyyy-MM-dd hh:mm:ss"
                                    ) : timeListItem.brife
                                }
                            </span>
                        </p>
                    ))
                }
            </View>
        )
    }
}

export default Component2
