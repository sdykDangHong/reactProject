import React,{ Component , Http , Url } from "react";
import { Input , Icon , Modal , Pagination } from "antd";
import { formatTime } from "../../../util/util";
import { connect } from "react-redux";
@connect(
    state=>({
        customerId:state.userInfo.customerId
    })
)
class OwnProject extends Component{
    constructor(){
        super()
        this.state={
            search:{
                page:1,
                sort:1,
                title:"",
            },
            ownProject:{
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
        if(this.props.customerId && !this.state.ownProject.total && this.state.ownProject.total!==0){
            this.getOwnProjectList()
        }
    }
    searchProject(e){
        this.setState({
            search:{
                ...this.state.search,
                title:e
            }
        },()=>{
            this.getOwnProjectList()
        })
    }
    searchProjectPageChange(e){
        this.setState({
            search:{
                ...this.state.search,
                page:e
            }
        },()=>{
            this.getOwnProjectList()
        })
    }
    changeProjectSortByEndTime(){
        this.setState({
            search:{
                ...this.state.search,
                sort:1-this.state.search.sort
            }
        },()=>{
            this.getOwnProjectList()
        })
    }
    returnDemandStatusWord(status=6){
        switch(status){
            case 0:
                return '审核中'
            case 1:
                return '审核失败'
            case 2:
                return '招募中'
            case 3:
                return '执行中'
            case 4:
                return '已完成'
            case 5:
                return '已关闭'
            case 6:
                return '沟通中'
            case 7:
                return '签约中'
            case 8:
                return '签约拒绝'
            case 9:
                return '签约过期'
            case 10:
                return '待托管'
            case 11:
                return '已托管'
            case 12:
                return '已支付'
            case 13:
                return '邀约中'
            case 14:
                return '邀约过期'
            case 15:
                return '邀约失败'
            case 16:
                return '邀约成功'
            case 17:
                return '待验收'
            case 18:
                return '验收通过'
            case 19:
                return '验收不通过'
            case 20:
                return '已评价' //甲方已评价
            case 21:
                return '已完成'//乙方已评价
            case 22:
                return  "已评价" //双方已评价
            default:
                return "沟通中"
        }
    }
    returnFirstSkill(skill){
        if(skill){
            if(skill.includes(',')){
                return skill.split(",")[0].split('-')[0]
            }else{
                return skill.split('-')[0]
            }
        }else{
            return "暂无"
        }
    }
    getOwnProjectList(){
        Http({
            url:`${Url.Bussiness}/demand/just-project.shtml`,
            method:"post",
            params:{
                customerId:this.props.customerId,
                start:this.state.search.page,
                length:10,
                sort:this.state.search.sort,
                title:this.state.search.title
            }
        }).then((res)=>{
            let { code , data , msg } =res.data;
            if(code===10000){
                this.setState({
                    ownProject:data
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
        return(
            <div className="ownProjectList">
                <div className="projectSearch">
                    <div className="searchTab">
                        <span className="tabItem">需求列表</span>
                    </div>
                    <div className="searchBox clear">
                        <div className="searchDemandTitle clear">
                            <div className="tit">我的需求</div>
                            <div className="demandTitleInput">
                                <Input.Search
                                    placeholder="请输入需求名称"
                                    size="large"
                                    onSearch={this.searchProject.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="demandSort clear">
                            <div className="sortIcon">
                                <Icon type="swap" onClick={this.changeProjectSortByEndTime.bind(this)} />
                            </div>
                            <div className="sortWord">需求到期时间</div>
                        </div>
                    </div>
                    {this.state.ownProject.list.map((item)=>
                        <div className="projectItem" key={item.demand_id}>
                            <div className="line firstLine clear">
                                <div className="lineItem left">{this.returnFirstSkill(item.skill_name)}</div>
                                <div className="lineItem center">{item.title}</div>
                                <div className="lineItem right">发布日期：{formatTime(item.create_time,"Y-M-D")}</div>
                            </div>
                            <div className="line secondLine clear">
                                <div className="lineItem left">对接人数：0</div>
                                <div className="lineItem center">项目预算：{item.budget_amount}</div>
                            </div>
                            <div className="statusPos">
                                <div className="statusWord">{this.returnDemandStatusWord(item.status)}</div>
                            </div>
                        </div>
                    )}
                    {this.state.ownProject.total>0?
                        <div className="projectPage">
                            <Pagination defaultCurrent={1} current={this.state.search.page} total={this.state.ownProject.total} onChange={this.searchProjectPageChange.bind(this)} />
                        </div>
                        :
                        <div className="ownProjectIsNull">
                            <h2>暂无更多需求</h2>
                        </div>
                    }

                </div>
            </div>
        )
    }
}
export default OwnProject;