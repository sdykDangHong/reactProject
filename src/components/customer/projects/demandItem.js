import React,{ Component } from "react";
import { Icon } from "antd";
import { formatTime } from "../../../util/util.js";
class DemandItem extends Component{
    transfrom(budget){
        budget=budget.replace(/100万 - 100万/,"100万以上")
        budget=budget.replace(/1万 - 1万/,"1万以下")
        budget=budget.replace(/0.0 - 0.0/,"暂无")
        return budget;
    }
    render(){
        return (
            <div className="demandItem">
                <div className="first"><span title="22222223">{this.props.title}</span>
                    <span className="time">发布时间：{ formatTime(this.props.insert_time,'Y-M-D') }</span></div>
                <div className="second"><span>{this.props.city}</span></div>
                <div className="three">
                    <span className="money">项目预算：<i className="memon">{this.transfrom(this.props.budget_range)}</i></span>
                </div>
                <Icon type="double-right" className="el-icon-d-arrow-right"></Icon>
            </div>
        )
    }
}
export default DemandItem;