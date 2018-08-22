import React , { Component } from "react";
import { BrowserRouter , Route , Switch , Redirect } from "react-router-dom";
import { Spin } from "antd";
import Home from "../components/home/home";
import Customer from "./customer";
import {connect} from "react-redux";
@connect(
    state=>({"isShowLoading":state.isShowLoading,redirectToLogin:state.redirectToLogin})

)
class Router extends Component{
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