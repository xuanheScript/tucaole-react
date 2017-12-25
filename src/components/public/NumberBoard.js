import React,{ PureComponent } from "react";
import styles from "styles/public/index.css";
import { View } from "react-web-dom";


export default class NumberBoard extends PureComponent {
    render() {
        const {
            title,
            number,
            style,
        } = this.props
        return (
            <View className={styles.button1} style={style}>
                <span className={styles.button1TopText}>{title}</span>
                <span className={styles.button1BottomText}>{number}</span>
            </View>
        )
    }
}
