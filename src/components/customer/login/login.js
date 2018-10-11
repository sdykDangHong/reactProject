import React,{ Component , Http , Url } from "react";
import { Button , Modal } from "antd";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import Header from "../../common/header";
import Footer from "../../common/footer";
require('./css/login.less');
@connect(
    state=>({"state":state})

)

class Login extends Component{
    constructor(){
        super()
        this.state={
            YzmInfo:{
                imgStr:''
            }
        }
    }
    componentWillMount(){
        this.getYzmInfo()
    }
    getYzmInfo(){
        Http({
            url:`${Url.Bussiness}/customer/img.shtml`,
            method:"get",
            hideLoading:true
        }).then((res)=>{
            let { data } = res.data;
            this.setState({
                YzmInfo:data
            })
        })
    }
    login(){
        Http({
            url:`${Url.Bussiness}/customer/login.shtml`,
            method:"post",
            params:{
                mobile:this.state.mobile,
                password:this.state.password,
                imgCode:this.state.yzm.toLocaleUpperCase(),
                key:this.state.YzmInfo.key,
                source:2
            }
        }).then((res)=>{
            let { code , data , msg } = res.data;
            if(code===10000){
                let time=new Date(new Date().getTime()+(this.props.state.tokenEffective)).toUTCString();
                document.cookie = 'com.sdykToken='+data.token+";path=/;expires="+time;
                this.props.dispatch({type:"userLogin",userInfo:data})
                this.props.history.push("/demander/projects")
            }else{
                Modal.info({title:"提示",content:msg})
            }
        })

    }
    changeInput(e){
        let key=e.currentTarget.getAttribute("data-name");
        let value=e.target.value;
        this.setState({
            [key]:value
        })
    }
    enterLogin(event){
        if(event.which!==13){
            return false
        }else{
            this.login()
        }
    }
    render(){
        const iconList=[
            {
                icon:'http://www.315free.com/static/img/login_user.png',
                imgAlt:"账号",
                name:"mobile",
                inputType:"text",
                inputPlaceHolder:'请输入手机号',
                yzm:false
            },
            {
                icon:'http://www.315free.com/static/img/login_pwd.png',
                imgAlt:"密码",
                name:"password",
                inputType:"password",
                inputPlaceHolder:'请输入密码',
                yzm:false
            },
            {
                icon:'http://www.315free.com/static/img/login_send.png',
                imgAlt:"验证码",
                name:"yzm",
                inputType:"text",
                inputPlaceHolder:'请输入验证码',
                yzm:true
            }
        ]
        return (
            <div className="container">
                <Header {...this.props}/>
                <div className="login">
                    <h1>更多的专业服务，量身打造的用户体验，尽在三点一刻平台</h1>
                    <div className="loginBox">
                        <h2>登录</h2>
                        <div className="loginBoxInput">
                            {iconList.map((item)=>{
                                return (
                                    <div className={`inputItem clear ${item.name}`} key={item.imgAlt}>
                                        <span>
                                            <img src={item.icon} alt={item.imgAlt}/>
                                        </span>
                                        <input type={item.inputType} placeholder={item.inputPlaceHolder} onInput={this.changeInput.bind(this)} onKeyUp={this.enterLogin.bind(this)} data-name={item.name}/>
                                        {item.yzm?(<div className="yzmImg"><img src={this.state.YzmInfo.imgStr} alt="图片验证码" onClick={this.getYzmInfo.bind(this)}/></div>):''}
                                    </div>
                                )
                            })}
                            <div className="loginBtn">
                                <Button type="primary" onClick={this.login.bind(this)}>登录</Button>
                            </div>
                            <div className="loginLink">
                                <Link to="/register" style={{"float":"left"}}>用户注册</Link>
                                <Link to="/forgetPassowrd" style={{"float":"right"}}>忘记密码</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Login;