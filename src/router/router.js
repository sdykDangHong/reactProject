import React , { Component , Http , Url } from "react";
import { BrowserRouter , Route , Switch , Redirect } from "react-router-dom";
import { Spin } from "antd";
import Home from "../components/home/home";
import Customer from "./customer";
import { getCookie } from "../util/util";
import {connect} from "react-redux";
@connect(
    state=>({
        isShowLoading:state.isShowLoading,
        redirectToLogin:state.redirectToLogin
    })

)
class Router extends Component{
    componentWillMount(){
        Http({
            url:`${Url.Bussiness}/customer/getUserInfo.shtml`,
            method:"post",
            params:{
                token:getCookie("com.sdykToken")
            }
        }).then((res)=>{
            let { code , data } =res.data;
            if(code===10000){
                this.props.dispatch({type:"resetUserInfo",userInfo:data})
            }
        })
    }
    render(){
        return (
            <BrowserRouter>
                <Spin tip="加载中，请稍后" spinning={this.props.isShowLoading}>
                    <Switch>
                        {this.props.redirectToLogin?(<Redirect to="/about" />):''}
                        <Customer/>
                        <Route component={Home}/>
                    </Switch>
                </Spin>
            </BrowserRouter>
        )
    }
}
export default Router;