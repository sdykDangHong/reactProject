import React,{Component , Http , Url} from "react";
import { Modal , Pagination } from "antd";
import Header from "../../common/header";
import Footer from "../../common/footer";
import DemandItem from "./demandItem";
require('./css/projects.less');
class Projects extends Component{
    constructor(){
        super()
        this.state={
            page:1,
            demand:{
                content:[]
            }
        }
    }
    componentWillMount(){
        this.getDemandList()
    }
    getDemandList(){
        Http({
            url:`${Url.Rcmd}/project/rcmd`,
            method:"get",
            params:{
                start:this.state.page,
                length:10
            }
        })
        .then((res)=>{
            let { code , msg , data} = res.data
            if(code===1){
                this.setState({
                    demand:data
                })
            }else{
                Modal.info({
                    title:"提示",
                    content:msg
                })
            }
        })
    }
    changeDemandPage(e){
        this.setState(
            {page:e},
            ()=>{
                this.getDemandList()
            }
        )
    }
    render(){
        return(
            <div className="container">
                <Header {...this.props} />
                <div className="projects">
                    <h1>需求中心</h1>
                    <div className="demandList">
                        {this.state.demand.content.map((item)=>{
                            return (
                                <DemandItem {...item} key={item.demand_id}/>
                            )
                        })}
                        <Pagination className="page" onChange={this.changeDemandPage.bind(this)} current={this.state.page} total={30}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Projects;