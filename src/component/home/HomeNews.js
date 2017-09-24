import React,{ PureComponent } from 'react';
import { Carousel, Icon } from 'antd-mobile';
import styles from "../../style/HomeIndex.css";
import {getHomeInfoData} from '../../actions/home';
import {stateHoc} from '../../utils';
import { connect } from "react-redux";
import { View } from "react-web-dom";

@stateHoc({
    height:40,
})
class HomeNews extends PureComponent {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    hocComponentDidMount(){
        if(!this.props.data.length){
            this.props.dispatch(getHomeInfoData())
        }
    }
    render(){
        return(
            <View
                className={styles.freshLettersWarp}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    minHeight:'0.72rem'
                }}
            >
                <img className={styles.freshLettersLeftImg} src={require('../../images/freshLetters.png')} alt={'freshLetters'}/>
                <Carousel
                    className="my-carousel"
                    dots={false}
                    autoplay={true}
                    infinite
                    selectedIndex={1}
                    swipeSpeed={200}
                    style={{width:'73%'}}
                >
                    {
                        this.props.data.map((freshLettersItem,index)=>(
                            <View
                                className="v-item"
                                key={index}
                                onClick={()=>{
                                    this.props.clickProps.history.push({
                                        pathname: '/home',
                                        search: `?id=${freshLettersItem.id}&title=${freshLettersItem.title}`,
                                    })
                                }}
                            >
                                <p style={{margin:'0',color:'#333',fontSize:'0.28rem'}}>{freshLettersItem.title}</p>
                            </View>
                        ))
                    }
                </Carousel>
                <Icon type='right' style={{color:'#bbb'}} />
            </View>
        )
    }
}

const mapStateToProps = store => {
    const { homeIndex } = store.view
    return {
        data : homeIndex.infoData,
        fetchStatus : homeIndex.infoDataFetchStatus,
    }
}

export default connect(mapStateToProps)(HomeNews)
