import React,{ Component } from 'react';
import {windowWidth} from '../../utils/style';
import { View } from "react-web-dom";
import PropTypes from 'prop-types';

export default class NullDataView extends Component{
    static propTypes = {
        height : PropTypes.number,
        autoLayout : PropTypes.bool,
    };
    static defaultProps = {
        height : windowWidth*0.4,
        autoLayout : false,
    };
    render() {
        const {autoLayout,height} = this.props
        return (
            <View
                style={
                    Object.assign({},styles.loaddingView,
                        autoLayout
                        ?   {
                                flex:1
                            }
                        :   {
                                height,
                            }
                    )
                }
            >
                <img
                    src={require('../../images/fetchStatus/nullData.png')}
                    alt={'loading'}
                    style={
                        Object.assign({},styles.loaddingImage,
                            autoLayout
                            ?   {
                                    width: windowWidth*0.5,
                                }
                            :   {
                                    height:height,
                                    width:height,
                                }
                        )
                    }
                />
            </View>
        )
    }
}



const styles = {
    loaddingView:{
        justifyContent:'center',
        alignItems:'center',
    },
    loaddingImage:{

    },
}
