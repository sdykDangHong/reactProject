import React, {Component} from "react";
import { Checkbox , Button , Icon } from "antd";
import { Link } from "react-router-dom";
class DemandsAddRegister extends Component{
    constructor(){
        super()
        this.state={
            iconList:[
                {
                    icon:'http://www.315free.com/static/img/login_user.png',
                    imgAlt:"昵称",
                    name:"nick",
                    inputType:"text",
                    inputPlaceHolder:'请输入昵称',
                    yzm:false
                },
                {
                    icon:'http://www.315free.com/static/img/login_user.png',
                    imgAlt:"账号",
                    name:"mobile",
                    inputType:"text",
                    inputPlaceHolder:'请输入手机号',
                    yzm:false
                },
                {
                    icon:'http://www.315free.com/static/img/login_send.png',
                    imgAlt:"验证码",
                    name:"yzm",
                    inputType:"text",
                    inputPlaceHolder:'请输入验证码',
                    yzm:true
                },
                {
                    icon:'http://www.315free.com/static/img/login_pwd.png',
                    imgAlt:"密码",
                    name:"password",
                    inputType:"password",
                    inputPlaceHolder:'请输入密码',
                    yzm:false
                }
            ]
        }
    }

    render(){
        return(
            <div className="registerBoxInput">
                {this.state.iconList.map((item)=>{
                    return (
                        <div className={`inputItem clear ${item.name}`} key={item.imgAlt}>
                            <span>{item.imgAlt}</span>
                            <input type={item.inputType} placeholder={item.inputPlaceHolder} onInput={this.props.changeInput} data-name={item.name}/>
                            {item.yzm?(<div className="yzmImg"><img src={this.props.YzmInfo.imgStr} alt="图片验证码" onClick={this.props.getYzmInfo}/></div>):''}
                        </div>
                    )
                })}
                <div className="registerAgreement">
                    <Checkbox
                        checked={this.props.registerAgreementChecked}
                        onChange={this.props.registerAgreementOnChange} />
                    <span>我已阅读<a target="_blank" rel="noopener noreferrer" style={{"color":"blue"}} href="https://h5.315free.com/networkPro.html">用户协议</a>，并同意加入平台</span>
                </div>
                <div className="demandsRegisterBtn">
                    <Button type="primary" onClick={this.props.demandRegister}>登录</Button>
                </div>
                <div className="toLogin">
                    <Link to="/login"><Icon type="user" />已有账号去登陆</Link>
                </div>
            </div>
        )
    }
}
export default DemandsAddRegister;