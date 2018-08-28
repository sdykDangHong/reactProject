import React , { Component , Http , Url } from "react";
import { connect } from "react-redux";
import Header from "../../common/header";
import Footer from "../../common/footer";
import DemandsAddRegister from "./demands-add-register";
import DemandContent from "./demandContent";
require("./css/demands-add.less");
@connect(
    state=>({
        "customerId":state.userInfo.customerId
    })
)
class  DemandsAdd extends Component{
    constructor(){
        super()
        this.state={
            YzmInfo:{
                imgStr:''
            },
            step:1,
            registerAgreementChecked:false
        }
    }
    componentWillMount(){
        this.getYzmInfo()
        if(this.props.customerId) {
            this.setState({
                step: 2
            })
        }
    }
    componentWillUpdate(props,state){
        if(props.customerId && !this.props.customerId && state.step===1){
            this.setState({
                step:2
            })
        }
    }
    addDemand(){
        this.props.history.push('/demander/projects')
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
    registerAgreementOnChange(){
        this.setState({
            registerAgreementChecked:!this.state.registerAgreementChecked
        })
    }
    changeInput(){

    }
    demanRegister(){
        this.setState({
            step:2
        })
    }
    render(){
        return (
            <div className="container">
                <Header {...this.props} />
                <div className="demands-add">
                    <div className="demands-add-box">
                        {
                            this.state.step===1?
                                <DemandsAddRegister {...this.state} demandRegister={this.demanRegister.bind(this)}  getYzmInfo={this.getYzmInfo.bind(this)} changeInput={this.changeInput.bind(this)}  registerAgreementOnChange={this.registerAgreementOnChange.bind(this)} />
                                :<DemandContent addDemand={this.addDemand.bind(this)} />
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default DemandsAdd;


