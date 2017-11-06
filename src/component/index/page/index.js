import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { View } from "react-web-dom";
import { ThemeStyle, windowHeight, windowWidth } from "../../../utils/style";

import styles from "../../../styles/index/index.css";

export default class Page extends Component {
    render() {
        return (
            <View
                className={styles.div3}
                style={this.props.style}
            >
                {this.props.children}
            </View>
        );
    }
}
