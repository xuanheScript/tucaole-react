import React,{ PureComponent } from 'react';
import { windowWidth } from "../../utils/style";
import {getHomeAd2Data} from '../../actions/home';
import {stateHoc} from '../../utils';
import { connect } from "react-redux";
import { View } from "react-web-dom";
import PropTypes from 'prop-types';

@stateHoc({
    height:100,
})
class HomeAdvTwo extends PureComponent {
    static propTypes = {
        data : PropTypes.array,
    };
    static defaultProps = {
        data : [],
    };
    constructor(props){
        super(props);
        this.state = {

        };
    }
    hocComponentDidMount(){
        if(!this.props.data.length){
            this.props.dispatch(getHomeAd2Data())
        }
    }
    render(){
        // console.log('HomeAdvTwo',this.props);
        return(
            <View
                style={{
                    marginBottom:'0.1rem',
                    minHeight:144*this.props.data.length,
                    justifyContent: 'space-between',
                }}
            >
                {
                    this.props.data.map((item,index)=>(
                        <img
                            key={index}
                            src={`${item.img}?x-oss-process=image/resize,m_fill,h_142,w_414`}
                            style={{width:windowWidth}}
                            onClick={()=>{
                            //   NavigatorModule.push(`/mall/MallGoodsDetail/${item.relation_model_id}`)
                            }}
                            alt={'img'}
                        />
                    ))
                }
            </View>
        )
    }
}


const mapStateToProps = store => {
    const { homeIndex } = store.view
    return {
        data : homeIndex.ad2Data,
        fetchStatus : homeIndex.ad2DataFetchStatus,
    }
}

export default connect(mapStateToProps)(HomeAdvTwo)
