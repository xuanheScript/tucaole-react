import React, { Component } from "react";
import PropTypes from "prop-types";
import { Picker, List, ListView, RefreshControl, SearchBar } from "antd-mobile";
import style from "../style/PublicComponent.css";
import styles from "../style/MallSearchListView.css";
import addressStyles from "../style/UserAddress.css";
import { Fetch } from "../utils";
import { View } from "react-web-dom";
import { ThemeStyle } from "../utils/style";

export class CityPicker extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        defaultValue: PropTypes.array,
        pickerAllAddressData: PropTypes.array,
        allAddressData: PropTypes.array,
    };
    static defaultProps = {
        onChange: () => {},
        defaultValue: undefined,
        pickerAllAddressData: [],
        allAddressData: [],
    };
    constructor(props) {
        super(props);
        this.state = {
            fetchOver: false,
            addressValue: this.props.defaultValue
        };
    }
    componentDidMount() {

    }
    render() {
        const {
            pickerAllAddressData,
            allAddressData,
        } = this.props
        return (
            <Picker
                data={pickerAllAddressData}
                title="选择地区"
                extra="选择收货区域"
                onChange={e => {
                    let addressText = ``;
                    const addressFunc = (array, arrayIndex) => {
                        array.map((one, index) => {
                            if (one.id === e[arrayIndex]) {
                                addressText = `${addressText}${one.name}`;
                                addressFunc(one.child, ++arrayIndex);
                            }
                            return true
                        });
                    };
                    addressFunc(allAddressData, 0);
                    this.setState(
                        {
                            addressValue: e
                        },
                        () => {
                            this.props.onChange({
                                city_id: e[0],
                                area_id: e[1],
                                street_id: e[2],
                                area_info: addressText
                            });
                        }
                    );
                }}
                value={
                    this.state.addressValue
                        ? this.state.addressValue
                        : undefined
                }
            >
                <List.Item arrow="horizontal" className={addressStyles.Picker}>区域选择：</List.Item>
            </Picker>
        )
    }
}

export class ListViewComponent extends Component {
    static propTypes = {
        renderHeader: PropTypes.func,
        renderRow: PropTypes.func,
        nullImgRoute: PropTypes.string
    };
    static defaultProps = {
        renderHeader: undefined,
        renderRow: () => {},
        nullImgRoute: "emptyListView"
    };
    dataEmptyHeight = 0;
    constructor(props) {
        super(props);
        this.state = {
            DataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            DataSourceArray: [],
            fetchParams: this.props.fetchParams
                ? Object.assign(this.props.fetchParams, { page: 1, rows: 20 })
                : { page: 1, rows: 20 },
            fetchAllow: true,
            fetchApiName: this.props.fetchApiName,
            isRefreshing: true,
            renderRow: this.props.renderRow,
            nullImgRoute: this.props.nullImgRoute,
            contentContainerStyle: this.props.contentContainerStyle
                ? this.props.contentContainerStyle
                : undefined,
            alwaysBounceVertical: this.props.alwaysBounceVertical
                ? this.props.alwaysBounceVertical
                : true,
            renderFooter: this.props.renderFooter
                ? this.props.renderFooter
                : null,
            renderSectionHeader: this.props.renderSectionHeader
                ? this.props.renderSectionHeader
                : null,
            scrollTop: 0,
            showNullDataView: false,
        };
        this._listViewRender = this._listViewRender.bind(this);
        this._fetchData = this._fetchData.bind(this);
    }
    componentDidMount() {
        // this._fetchData()
    }
    _fetchData(e) {
        if (this.state.fetchAllow) {
            // this.state.fetchAllow = false;
            this.setState({
                fetchAllow : false
            })
            Fetch.fetch(
                this.state.fetchApiName,
                this.state.fetchParams
            ).then(e => {
                this._listViewRender(e);
            });
        }
    }
    _listViewRender(e) {
        // ++this.state.fetchParams.page;
        const {
            fetchParams
        } = this.state
        this.setState({
            fetchParams : Object.assign({},fetchParams,{page:fetchParams.page+1})
        })

        if (e.page_data.next_cursor === 0) {
            this.setState({
                fetchAllow : false
            })
            // Toast.show('没有更多了');
        } else {
            this.setState({
                fetchAllow : true
            })
        }
        if (e.list.length > 0) {
            var newArray = [...this.state.DataSourceArray, ...e.list];
            this.setState({
                DataSourceArray: newArray,
                DataSource: new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2
                }).cloneWithRows(newArray),
                isRefreshing: false,
                showNullDataView: false
            });
        } else if (e.list.length === 0 && Number(e.page_data.current_page) === 1) {
            this.setState({
                showNullDataView: true,
                isRefreshing: false,
                DataSourceArray: [],
                DataSource: new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2
                }).cloneWithRows([])
            });
        }
    }
    _AutoRefresh(e) {
        this.setState({ isRefreshing: true }, () => {
            // this.state.DataSourceArray = [];
            // this.state.fetchAllow = true;
            // this.state.fetchParams.page = 1;
            const newParams = Object.assign({},this.state.fetchParams,{page:1})
            this.setState({
                DataSourceArray : [],
                fetchAllow : true,
                fetchParams : newParams
            },()=>{
                this._fetchData();
            })
        });
    }
    _ManuallyRefresh(e) {
        // this.ListView.scrollTo({ x: 0, y: -50, animated: false });
        this.setState(
            {
                isRefreshing: true
            },
            () => {
                // this.state.DataSourceArray = [];
                // this.state.fetchAllow = true;
                // this.state.fetchParams.page = 1;
                this.setState({
                    DataSourceArray : [],
                    fetchAllow : true,
                    fetchParams : Object.assign({},this.state.fetchParams,{page:1})
                })
                this._fetchData();
            }
        );
    }
    render() {
        return (
            <ListView
                className="modifyListBody"
                keyboardDismissMode={this.props.keyboardDismissMode}
                ref={e => {
                    this.ListView = e;
                }}
                dataSource={this.state.DataSource}
                renderRow={this.props.renderRow}
                style={Object.assign({}, { flex: 1 }, this.props.style)}
                contentContainerStyle={Object.assign(
                    {},
                    this.props.contentContainerStyle
                )}
                onEndReachedThreshold={500}
                onEndReached={() => {
                    this._fetchData();
                }}
                alwaysBounceVertical={this.state.alwaysBounceVertical}
                enableEmptySections={true}
                onScroll={this._onScroll.bind(this)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => this._AutoRefresh()}
                        colors={["#00BA91"]}
                        progressBackgroundColor="#F4F4F4"
                    />
                }
                renderFooter={() => {
                    if (this.state.fetchAllow) {
                        return (
                            <div style={{ padding: 30, textAlign: "center" }}>
                                加载中...
                                {this.state.renderFooter}
                            </div>
                        );
                    } else {
                        return this._NullDataView();
                    }
                }}
                renderHeader={
                    this.props.renderHeader
                        ? e => {
                              return this.props.renderHeader();
                          }
                        : undefined
                }
                renderSectionHeader={
                    this.state.renderSectionHeader
                        ? (sectionData, sectionID) => {
                              return this.state.renderSectionHeader();
                          }
                        : undefined
                }
                onLayout={e => {
                    this.dataEmptyHeight = e.nativeEvent.layout.height;
                }}
                scrollerOptions={{}}
            />
        );
    }
    _onScroll(e) {
        // this.state.scrollTop = e.nativeEvent.contentOffset.y;
    }
    _scrollTo(e) {
        this.ListView.scrollTo(e);
    }
    _setFetchParams(e) {
        // this.ListView.scrollTo({x:0,y:0,animated:false})
        // Object.assign(this.state.fetchParams, e, { page: 1 })
        // this.state.DataSourceArray = [];
        // this.state.fetchAllow = true;
        this.setState({
            isRefreshing: true ,
            fetchParams : Object.assign({},this.state.fetchParams, e, { page: 1 }),
            DataSourceArray : [],
            fetchAllow : true,
        }, () => {
            // this.ListView.scrollTo({x:0,y:-120,animated:true})
            this._fetchData();
        });
    }
    _NullDataView() {
        //View中写数据空时显示的view
        if (this.state.showNullDataView) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "25%"
                    }}
                >
                    <img
                        src={require(`../images/fetchStatus/${this.state.nullImgRoute}.png`)}
                        style={{
                            width: "3rem",
                            height: "3rem",
                            marginBottom: "1.5em"
                        }}
                        alt={'nullImgRoute'}
                    />
                    <div style={{ textAlign: "center" }}>
                        <div
                            style={{
                                marginBottom: "0.8em",
                                fontSize: "1em",
                                color: "rgb(107, 104, 104)"
                            }}
                        >
                            数据为空
                        </div>
                        <div
                            style={{
                                marginBottom: "1em",
                                fontSize: "0.9em",
                                color: "rgb(171, 168, 168)"
                            }}
                        >
                            暂时没有相关数据
                        </div>
                    </div>
                </View>
            );
        }
    }
}

export class SearchBarComponent extends Component {
    render() {
        return <SearchBar {...this.props} className={style.SearchBar} />;
    }
}

/**
 * 星星等级   只读
*/
export class StarViewComponent extends Component {
    static propTypes = {
        number: PropTypes.number
    };
    static defaultProps = {
        number: 5
    };
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number
        };
    }
    render() {
        var starArray = [];
        for (var i = 0; i < this.state.number; i++) {
            starArray.push(
                <img
                    key={i}
                    src={require("../images/star.png")}
                    style={{ marginRight: "0.5em", width: "0.37rem" }}
                    alt={'star'}
                />
            );
        }
        return (
            <View style={{ flexDirection: "row" }}>
                {starArray}
            </View>
        );
    }
}

/**
 * 星星评分
*/
export class EvaluateStar extends Component {
    static propTypes = {
        number: PropTypes.number,
        seletedEnd: PropTypes.func
    };
    static defaultProps = {
        number: 5,
        seletedEnd: null
    };
    modifyEndIndex(starItem) {
        this.props.seletedEnd(starItem);
    }
    render() {
        let arr = [1, 2, 3, 4, 5];
        const endIndex = this.props.number;
        return (
            <View style={{ flexDirection: "row", width: "60%" }}>
                <div className={style.allEvaluateStar}>
                    {arr.map((starItem, index) => (
                        <img
                            key={index}
                            src={require(`../images/${starItem > endIndex ? "star-o.png" : "star.png"}`)}
                            style={{ marginRight: "0.5em", width: "0.37rem" }}
                            className={styles.ShopCheckIcon}
                            onClick={this.modifyEndIndex.bind(this, starItem)}
                            alt={'star'}
                        />
                    ))}
                    <span
                        style={{
                            marginLeft: "0.5em",
                            color: "#888",
                            fontSize: "0.86em"
                        }}
                    >
                        {endIndex === "1"
                            ? "小失落"
                            : endIndex === "2"
                                  ? "待提高"
                                  : endIndex === "3"
                                        ? "待提高"
                                        : endIndex === "4"
                                              ? "很棒"
                                              : endIndex === "5" ? "很棒" : ""}
                    </span>
                </div>
            </View>
        );
    }
}


/**
 * 倒计时按钮
*/
export class CountdownButton extends Component{
    static propTypes = {
        verification : PropTypes.func,
        getParams  : PropTypes.func,
        title : PropTypes.string,
        fetchApiName : PropTypes.string,
    };
    static defaultProps = {
        verification : ()=>{},
        getParams : ()=>{},
        title : '获取验证码',
        fetchApiName : 'NULL',
    };
    constructor(props) {
        super(props);
        this.state = {
            title : this.props.title,
            wait:60,
            ready : true,
        };
    }
    intervalFunc(){
        this.timer = window.setInterval(() => {
            if(this.state.wait===0){
                window.clearInterval(this.timer)
                this.setState({
                    title:'获取验证码',
                    ready : true,
                    wait : 60,
                });
            }else{
                this.setState({
                    title:'剩余'+(--this.state.wait)+'秒',
                    ready : false,
                });
            }
        }, 1000);
    }
    componentWillUnmount(){
        this.timer&&window.clearInterval(this.timer)
    }
    render(){
        const {
            getParams,
            verification,
            fetchApiName,
        } = this.props
        return(
            <span
                style={{fontSize:'0.32rem',color:ThemeStyle.themeColor}}
                disabled = {!this.state.ready}
                onClick={()=>{
                    if(this.state.ready){
                        const params = getParams();
                        Fetch.fetch(fetchApiName,params)
                        .then((e)=>{
                            verification(e)
                            if(e.errcode===0){
                                this.intervalFunc()
                            }
                        })
                    }
                }}
            >
                {this.state.title}
            </span>
        );
    }
}
