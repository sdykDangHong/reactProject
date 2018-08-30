import React,{ Component , Url , Http } from "react";
import { Modal , Pagination } from "antd";
import Header from "../../common/header";
import Footer from "../../common/footer";
import DemandItem from "../../customer/projects/demandItem";
import { connect } from "react-redux";
require("./css/searchProjects.less");
@connect(
    state=>({
        customerId:state.userInfo.customerId
    })
)
class SearchProjects extends Component{
    constructor(){
        super()
        this.state={
            page:1,
            searchProjects:{
                list:[]
            }
        }
    }
    componentWillMount(){
        this.init()
    }
    componentDidUpdate(){
        // 在用户更新信息之后的数据刷新
        this.init()
    }
    init(){
        // 判断是否可以取到用户登陆信息之后进行用户信息调取
        if(this.props.customerId && this.state.searchProjects.list.length<=0){
            this.getSearchProjects()
        }
    }
    demandPageChange(e){
        this.setState(
            {page:e},
            ()=>{
                this.getSearchProjects()
            }
        )
    }
    getSearchProjects(){
        Http({
            url:`${Url.Rcmd}/project/rcmd`,
            method:"get",
            params:{
                customerId:this.props.customerId,
                start:this.state.page,
                length:10
            }
        }).then((res)=>{
            let { code , data , msg } = res.data;
            if(code===1){
                this.setState({
                    searchProjects:{
                        list:data.content,
                        total:data._meta.total
                    }
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
                <div className="searchProjects">
                    <div className="demandList">
                        {this.state.searchProjects.list.map((item)=>
                            <DemandItem {...item} key={item.demand_id}/>
                        )}
                        <div className="page">
                            <Pagination current={this.state.page} onChange={this.demandPageChange.bind(this)} total={this.state.searchProjects.total}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default SearchProjects;