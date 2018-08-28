import React, {Component, Http, Url} from "react";
import { Button , Radio , Checkbox } from "antd";
import Header from "../../common/header";
import Footer from "../../common/footer";
require("./css/register.less");
class Register extends Component{
    constructor(){
        super()
        this.state={
            iconList:[
                [
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
                ],
                [
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
                        imgAlt:"确认密码",
                        name:"confirmPassword",
                        inputType:"text",
                        inputPlaceHolder:'请再次输入密码',
                        yzm:false
                    }
                ]
            ],
            YzmInfo:{
                imgStr:''
            },
            step:0,
            cardRadioChecked:0,
            cardRadio:[
                {
                    label:"我是客户",
                    value:0
                },
                {
                    label:"我是智库",
                    value:1
                }
            ],
            registerAgreementChecked:false
        }
    }
    componentWillMount(){
        this.getYzmInfo()
    }
    changeStep(){
        this.setState({
            step:1
        })
    }
    changeInput(){

    }
    cardRadioChange(e){
        let index=e.target.value;
        this.setState({
            cardRadioChecked:index
        })
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
    render(){
        return (
            <div className="container">
                <Header {...this.props} />
                <div className="register">
                    <h1>欢迎加入三点一刻平台，为您提供营销领域的专业服务</h1>
                    <div className="registerBox">
                        <div className="stepProgress">
                            <div className={this.state.step===0?'active':''}></div>
                            <div className={this.state.step===1?'active':''}></div>
                        </div>
                        <h2>注册</h2>
                        <div className="registerInputBox">
                            {this.state.iconList[this.state.step].map((item)=>{
                                return (
                                    <div className={`inputItem clear ${item.name}`} key={item.imgAlt}>
                                        <span>
                                            <img src={item.icon} alt={item.imgAlt}/>
                                        </span>
                                        <input type={item.inputType} placeholder={item.inputPlaceHolder} onInput={this.changeInput.bind(this)} data-name={item.name}/>
                                        {item.yzm?(<div className="yzmImg"><img src={this.state.YzmInfo.imgStr} alt="图片验证码" onClick={this.getYzmInfo.bind(this)}/></div>):''}
                                    </div>
                                )
                            })}
                            {
                                this.state.step===1?
                                    (
                                        <div>
                                            <div className="cardRadio">
                                                <Radio.Group options={this.state.cardRadio} onChange={this.cardRadioChange.bind(this)} value={this.state.cardRadioChecked} />
                                            </div>
                                            <div className="registerAgreement">
                                                <Checkbox
                                                    checked={this.state.registerAgreementChecked}
                                                    onChange={this.registerAgreementOnChange.bind(this)} />
                                                <span>我已阅读<a target="_blank" rel="noopener noreferrer" style={{"color":"blue"}} href="https://h5.315free.com/networkPro.html">用户协议</a>，并同意加入平台</span>
                                            </div>
                                        </div>
                                    )

                                :''
                            }

                            <div className="btn">
                                {this.state.step===0?
                                    <Button type="primary" onClick={this.changeStep.bind(this)}>下一步</Button>:
                                    <Button type="primary">开启智能平台</Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Register;