import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar } from "antd-mobile";
// import store from '../store';

class NavigationBar extends Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        history: PropTypes.object,
        title : PropTypes.array,
        rightContent : PropTypes.array,
        leftContent : PropTypes.array,
        showLeft : PropTypes.bool,
        onLeftClick : PropTypes.func,
        titleColor : PropTypes.string,
    };
    static defaultProps = {
        className : '',
        style : undefined,
        history : undefined,
        title : ['title'],
        rightContent : [],
        leftContent : null,
        showLeft : true,
        onLeftClick : undefined,
        titleColor : '#9c6e4e',
    };
    render() {
        const {history} = this.props
        const goBack = history&&history.length>1
        return (
            <NavBar
                iconName = {
                    this.props.showLeft
                    ?   goBack?'left':require('../images/home.svg')
                    :   null
                }
                leftContent = {this.props.leftContent}
                mode="light"
                onLeftClick={() => {
                    if(this.props.onLeftClick){
                        this.props.onLeftClick()
                    }else {
                        if(goBack){
                            this.props.history.goBack()
                        }else {
                            this.props.history.push('/index/home')
                        }
                    }
                }}
                rightContent={this.props.rightContent}
                className = {this.props.className}
                style = {this.props.style}
            >
                <span style={{color:`${this.props.titleColor}`}}>
                    {
                        this.props.title[0]
                    }
                </span>
            </NavBar>
        )
    }
}

export default NavigationBar
