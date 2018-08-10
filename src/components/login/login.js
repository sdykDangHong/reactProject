import React,{ Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
require('./css/login.less');
class Login extends Component{
    render(){
        const iconList=[
            {
                icon:'http://www.315free.com/static/img/login_user.png',
                imgAlt:"账号",
                inputPlaceHolder:'请输入手机号',
                yzm:false
            },
            {
                icon:'http://www.315free.com/static/img/login_pwd.png',
                imgAlt:"密码",
                inputPlaceHolder:'请输入密码',
                yzm:false
            },
            {
                icon:'http://www.315free.com/static/img/login_send.png',
                imgAlt:"验证码",
                inputPlaceHolder:'请输入验证码',
                yzm:true
            }
        ]
        return (
            <div className="login">
                <h1>更多的专业服务，量身打造的用户体验，尽在三点一刻平台</h1>
                <div className="loginBox">
                    <h2>登录</h2>
                    <div className="loginBoxInput">
                        {iconList.map((item)=>{
                            return (
                                <div className="inputItem" key={item.imgAlt}>
                                    <span>
                                        <img src={item.icon} alt={item.imgAlt}/>
                                    </span>
                                    <input type="text" placeholder={item.inputPlaceHolder}/>
                                </div>
                            )
                        })}
                        <div className="loginBtn">
                            <Button type="primary">登录</Button>
                        </div>
                        <div className="loginLink">
                            <Link to="/register" style={{"float":"left"}}>用户注册</Link>
                            <Link to="/forgetPassowrd" style={{"float":"right"}}>忘记密码</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;