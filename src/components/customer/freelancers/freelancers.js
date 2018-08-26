import React , { Component , Http , Url } from "react";
import { Link } from "react-router-dom";
import { Modal , Pagination } from "antd";
import Header from "../../common/header";
import Footer from "../../common/footer";
import FreelancersItem from "./freelancersItem";
require("./css/freelancers.less");
class Freelancers extends Component{
    constructor(){
        super()
        this.state={
            page:1,
            freelancers:{
                content:[]
            }
        }
    }
    componentWillMount(){
        this.getFreelancers()
    }
    changeDFreelancersPage(e){
        this.setState(
            {page:e},
            ()=>{
                this.getFreelancers()
            }
        )
    }
    getFreelancers(){
        Http({
            url:`${Url.Rcmd}/user/noLogin`,
            method:"get",
            params:{
                start:this.state.page,
                length:10
            }
        })
            .then((res)=>{
                let { code , data , msg } =res.data;
                if(code===1){
                   this.setState({
                       freelancers:data
                   })
                }else{
                    Modal.info({
                        title:"提示",
                        content:msg
                    })
                }
            })
    }
    render(){
        return (
            <div className="container">
                <Header {...this.props} />
                <div className="freelancers">
                    <div className="freelancerTit"><span>智库中心</span><Link to="demands-add" className="toDemand">发布需求</Link></div>
                    <div className="freelancerList">
                        {this.state.freelancers.content.map((item)=><FreelancersItem {...item} key={item.customer_id}/>)}
                        <Pagination className="page" onChange={this.changeDFreelancersPage.bind(this)} current={this.state.page} total={30}/>
                     </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Freelancers;