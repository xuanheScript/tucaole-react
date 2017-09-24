import React,{ PureComponent } from 'react';
import PropTypes from 'prop-types';
import { windowWidth } from "../../utils/style";
import {getHomeAdData} from '../../actions/home';
import {stateHoc} from '../../utils';
import { connect } from "react-redux";
import { View } from "react-web-dom";

@stateHoc({
    height:100,
})
class HomeAdv extends PureComponent {
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
            this.props.dispatch(getHomeAdData())
        }
    }
    render(){
        // console.log('HomeAdv',this.props);
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
                                // this.props.clickProps.history.push({
                                //     pathname: '/home',
                                //     search: `?id=${sortItem.id}&title=${sortItem.title}`,
                                // })
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
        data : homeIndex.adData,
        fetchStatus : homeIndex.adDataFetchStatus,
    }
}

export default connect(mapStateToProps)(HomeAdv)
