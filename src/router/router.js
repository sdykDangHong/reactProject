import React , { Component , Http , Url } from "react";
import { BrowserRouter , Route , Switch , Redirect } from "react-router-dom";
import { Spin } from "antd";
import {connect} from "react-redux";
import { getCookie } from "../util/util";
import Home from "../components/customer/home/home";
import About from "../components/customer/about/about";
import FreemanHot from "../components/customer/freeman_hot/freeman_hot";
import Team from "../components/customer/team/team";
import Login from "../components/customer/login/login";
import Recruitment from "../components/customer/recruitment/recruitment";
import Projects from "../components/customer/projects/projects";
import Freelancers from "../components/customer/freelancers/freelancers";
import DemandsAdd from "../components/customer/demand-add/demand-add";
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
                <Spin tip="加载中，请稍后" spinning={this.props.isShowLoading} className="loading">
                    <Switch>
                        {this.props.redirectToLogin?(<Redirect to="/about" />):''}
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/about" component={About}/>
                        <Route path="/development" component={About}/>
                        <Route path="/contact_us" component={About}/>
                        <Route path="/team" component={Team}/>
                        <Route path="/recruitment" component={Recruitment}/>
                        <Route path="/freeman_hot" component={FreemanHot}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/freelancers" component={Freelancers}/>
                        <Route path="/demands-add" component={DemandsAdd}/>
                        <Route>
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                </Spin>
            </BrowserRouter>
        )
    }
}
export default Router;