import React , { Component , Http , Url } from "react";
import { Checkbox , Button , Icon } from "antd";
import { Link } from "react-router-dom";
import Header from "../../common/header";
import Footer from "../../common/footer";
require("./css/demands-add.less");
class  DemandsAdd extends Component{
    constructor(){
        super()
        this.state={
            YzmInfo:{
                imgStr:''
            },
            registerAgreementChecked:false
        }
    }
    componentWillMount(){
        this.getYzmInfo()
    }
    registerAgreementOnChange(){
        this.setState({
            registerAgreementChecked:!this.state.registerAgreementChecked
        })
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
    changeInput(){

    }
    render(){
        const iconList=[
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
        return (
            <div className="container">
                <Header {...this.props} />
                <div className="demands-add">
                    <div className="demands-add-box">
                        <div className="registerBoxInput">
                            {iconList.map((item)=>{
                                return (
                                    <div className={`inputItem clear ${item.name}`} key={item.imgAlt}>
                                        <span>{item.imgAlt}</span>
                                        <input type={item.inputType} placeholder={item.inputPlaceHolder} onInput={this.changeInput.bind(this)} data-name={item.name}/>
                                        {item.yzm?(<div className="yzmImg"><img src={this.state.YzmInfo.imgStr} alt="图片验证码" onClick={this.getYzmInfo.bind(this)}/></div>):''}
                                    </div>
                                )
                            })}
                            <div className="registerAgreement">
                                <Checkbox
                                    checked={this.state.registerAgreementChecked}
                                    onChange={this.registerAgreementOnChange.bind(this)} />
                                <span>我已阅读<a target="_blank" rel="noopener noreferrer" style={{"color":"blue"}} href="https://h5.315free.com/networkPro.html">用户协议</a>，并同意加入平台</span>
                            </div>
                            <div className="demandsRegisterBtn">
                                <Button type="primary">登录</Button>
                            </div>
                            <div className="toLogin">
                                <Link to="/login"><Icon type="user" />已有账号去登陆</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default DemandsAdd;


