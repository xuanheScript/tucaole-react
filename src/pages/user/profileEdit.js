import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { View } from "react-web-dom";
import { ThemeStyle, windowHeight, windowWidth } from "../../utils/style";
import {
    Row,
    AutoComplete,
    Input,
    Button,
    Icon,
    Dropdown,
    Menu,
    Card,
    Col,
    Upload,
    Radio,
    Cascader,
} from "antd";
import styles from "../../styles/user/profileEdit.css";
import Header from "../../component/index/header";
import Page from "../../component/index/page";

const RadioGroup = Radio.Group;

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class ProfileEdit extends Component {

    render() {

        return (
            <div>
                <Header />
                <Page>
                    <Card bodyStyle={{padding:0}}>
                        <View className={styles.view1}>
                            <Upload className={styles.upload1}>
                                <Button size={'large'}>
                                    <Icon type="camera-o" style={{fontSize:18}}/>上传封面图片
                                </Button>
                            </Upload>
                        </View>
                        <View className={styles.view2}>
                            <Upload>
                                <View className={styles.view3}>
                                    <View className={styles.view5}>
                                        <Icon type="camera" style={{fontSize:35,color:'#fff'}}/>
                                        <span className={styles.span1}>修改我的头像</span>
                                    </View>
                                </View>
                            </Upload>
                            <View className={styles.view6}>
                                <span className={styles.span2}>李杰</span>
                                <ShowEdit
                                    title = {'昵称'}
                                    value = {'李杰'}
                                >
                                    <Input placeholder="填写你的昵称" size={'large'} style={{width:200}}/>
                                </ShowEdit>
                                <ShowEdit
                                    title = {'性别'}
                                    value = {'男'}
                                >
                                    <RadioGroup size={'large'}>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={2}>女</Radio>
                                    </RadioGroup>
                                </ShowEdit>
                                <ShowEdit
                                    title = {'一句话介绍'}
                                    value = {null}
                                >
                                    <Input placeholder="填写你的介绍" style={{width:'70%'}} size={'large'}/>
                                </ShowEdit>
                                <ShowEdit
                                    title = {'城市'}
                                    value = {null}
                                >
                                    <Cascader options={options} placeholder="请选择你的城市" style={{width:300}}/>
                                </ShowEdit>
                            </View>
                        </View>
                    </Card>
                </Page>
            </div>
        );
    }
}


class ShowEdit extends Component {
    state = {
        showEditContent: false,
        showEditButton: false,
    }
    render(){
        const {
            showEditContent,
            showEditButton,
        } = this.state
        const {
            title,
            children,
            value,
        } = this.props
        return(
            <View
                className={styles.view7}
                onMouseEnter = {()=>{
                    this.setState({
                        showEditButton: true
                    })
                }}
                onMouseLeave = {()=>{
                    this.setState({
                        showEditButton: false
                    })
                }}
            >
                <span className={styles.span3}>{title}</span>
                <View className={styles.view8}>
                    {
                        showEditContent
                        ?   <View style={{flex:1}}>
                                {children}
                                <div className={styles.div1}>
                                    <Button
                                        type="primary"
                                        size={'large'}
                                        onClick = {()=>{
                                            this.setState({
                                                showEditContent: false
                                            })
                                        }}
                                    >
                                        保存
                                    </Button>
                                    <Button
                                        style={{marginLeft:15}}
                                        size={'large'}
                                        onClick = {()=>{
                                            this.setState({
                                                showEditContent: false
                                            })
                                        }}
                                    >
                                        取消
                                    </Button>
                                </div>
                            </View>
                        :   value
                            ?   <div>
                                    <span className={styles.span4}>{value}</span>
                                    {
                                        showEditButton&&
                                        <Button
                                            icon="edit"
                                            onClick = {()=>{
                                                this.setState({
                                                    showEditContent: true
                                                })
                                            }}
                                            style = {{marginLeft:20}}
                                        >
                                            修改
                                        </Button>
                                    }
                                </div>
                            :   <Button
                                    icon="edit"
                                    onClick = {()=>{
                                        this.setState({
                                            showEditContent: true
                                        })
                                    }}
                                >
                                    填写
                                </Button>
                    }
                </View>
            </View>
        )
    }
}


const indexViewFunc = store => {
    const { shopCartIndex } = store.view;
    return {
        login: store.app.user.login
    };
};

export default connect(indexViewFunc)(ProfileEdit);
