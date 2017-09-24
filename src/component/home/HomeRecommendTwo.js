import React,{ PureComponent } from 'react';
import { connect } from "react-redux";
import { GoodsListRowButton } from "../goods";
import { View } from "react-web-dom";
import {getHomeAllGoodsData} from '../../actions/home';
import {stateHoc} from '../../utils';


@stateHoc({
    height : 100
})
class HomeRecommendTwo extends PureComponent {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    hocComponentDidMount(){
        if(!this.props.data.length){
            this.props.dispatch(getHomeAllGoodsData())
        }
    }
    componentWillUnmount(){

    }
    render(){
        // console.log('HomeRecommendTwo',this.props);
        // console.log('HomeRecommendTwo',Math.ceil(this.props.data.length/2));
        return(
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    minHeight:273*(Math.ceil(this.props.data.length/2))
                }}
            >
                {
                    this.props.data.map((item,index)=>(
                        <GoodsListRowButton key={index} data={item} index={index}/>
                    ))
                }
            </View>
        )
    }
}

const mapStateToProps = store => {
    const { homeIndex } = store.view
    return {
        data : homeIndex.allGoodsData,
        fetchStatus : homeIndex.allGoodsDataFetchStatus,
        allowFetch : homeIndex.allGoodsAllowFetch,
        fetchPage : homeIndex.allGoodsFetchPage,
    };
};

export default connect(mapStateToProps,null,null,{withRef:true})(HomeRecommendTwo);
