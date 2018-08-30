import React, {Component, Http, Url} from "react";
import "./css/header.less";
import { connect } from "react-redux";
import {Modal , Menu} from "antd";
import DemanderHeader from "./headerCardComponent/demanderHeader";
import NoLoginHeader from "./headerCardComponent/noLoginHeader";
import FreelancerHeader from "./headerCardComponent/freelancerHeader";
@connect(
    state=>({
        "customerId":state.userInfo.customerId,
        "loginState":state.userInfo.loginState,
        "userInfo":state.userInfo
    })
)
class Header extends Component{
    userInfoBtnClick(e){
        if(e.key==='1'){
            if(this.props.loginState===1){
                this.props.history.push("/demander/projects")
            }else{
                this.props.history.push("/freelancer/projects")
            }

        }else if(e.key==='2'){
            // 切换身份
            Http({
                url:`${Url.Bussiness}/customer/change-auth`,
                method:"post",
                params:{
                    token:this.props.userInfo.token
                }
            })
            .then((res)=>{
                let { code , data , msg } = res.data;
                if(code===10000){
                    let obj={
                        ...this.props.userInfo,
                        loginState:data
                    }
                    this.props.dispatch({
                        type:"changeUserCurrentIdentity",
                        userInfo:obj
                    })
                    if(data===1){
                        this.props.history.push("/demander/projects")
                    }else{
                        this.props.history.push("/freelancer/projects")
                    }
                }else{
                    Modal.info({
                        title:"提示",
                        content:msg
                    })
                }
            })
        }else if(e.key==='3'){
            Http({
                url:`${Url.Bussiness}/customer/logout.shtml`,
                method:"get",
            })
            .then((res)=>{
                let { code , msg} = res.data;
                if(code===10000){
                    let time=new Date(new Date().getTime()-1).toUTCString();
                    document.cookie = "com.sdykToken=;path=/;expires="+time;
                    this.props.dispatch({type:"userLogout",userInfo:{}})
                    this.props.history.push('/login')
                }else{
                    Modal.info({
                        title:"提示",
                        content:msg
                    })
                }
            })
        }
    }
    render(){
        const menu=(
            <Menu onClick={this.userInfoBtnClick.bind(this)}>
                <Menu.Item key={1}>
                    <span>工作台</span>
                </Menu.Item>
                <Menu.Item key={2}>
                    <span>切换身份</span>
                </Menu.Item>
                <Menu.Item key={3}>
                    <span>退出登录</span>
                </Menu.Item>
            </Menu>
        )
        let ShowHeader;
        if(this.props.customerId){
            if(this.props.loginState===1){
                ShowHeader=()=><DemanderHeader {...this.props} menu={menu}/>
            }else{
                ShowHeader=()=><FreelancerHeader {...this.props} menu={menu}/>
            }

        }else{
            ShowHeader=()=><NoLoginHeader {...this.props} />
        }
        return (
            <ShowHeader />
        )
    }
}
export default Header;