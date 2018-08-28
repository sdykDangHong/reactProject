import React,{ Component , Http , Url } from "react";
import { Input , Button , DatePicker , Cascader , Modal , Select } from "antd";
class DemandContent extends Component{
    constructor(){
        super()
        this.state={
            DateDisable:(current)=>{
                return current && current < new Date()
            },
            serviceTagConfig:{
                "label":"tagName",
                "value":"index",
                "children":"list"
            },
            serviceTagList:[],
            budgetAmountList:['1万以下','1万-3万','3万-10万','10万-30万','30万-50万','50万-100万','100万以上']
        }
    }
    componentWillMount(){
        this.getServiceTagList()
    }
    getServiceTagList(){
        Http({
            url:`${Url.Border}/border/${Url.version}/serviceTags.shtml`,
            method:"get"
        }).then((res)=>{
            let { code , data , msg } = res.data;
            if(code===10000){
                data.map((item,index)=>{
                    item.index=index;
                    item.list.map((item,index)=>{
                        item.index=index;
                        return 2;
                    })
                    return 1;
                })
                this.setState({
                    serviceTagList:data
                })
            }else{
                Modal.inco({
                    title:"提示",
                    content:msg
                })
            }
        })
    }
    render(){
        return (
            <div className="addDemand">
                <div className="title">
                    <h1>发布需求</h1>
                    <div>
                        <img src="http://testwww.315free.com/static/img/addDemandHr.png" alt="hr"/>
                    </div>
                </div>
                <div className="contentList">
                    <div className="contentItem">
                        <p className="tit">需求名称</p>
                        <div className="input"><Input type="text" size="large" placeholder="请输入您的需求名称" value={this.props.demandTit} onKeyDown={this.props.inputChange} /></div>
                    </div>
                    <div className="contentItem">
                        <p className="tit">交付日期</p>
                        <div className="input"><DatePicker format="YYYY-MM-DD" placeholder="请选择完成时间" size="large" className="widthAll" showToday={false} disabledDate={this.state.DateDisable}/></div>
                    </div>
                    <div className="contentItem">
                        <p className="tit">服务类型</p>
                        <div className="input"><Cascader size="large" placeholder="请选择服务类型" expandTrigger="hover" className="widthAll" options={this.state.serviceTagList} fieldNames={this.state.serviceTagConfig} /></div>
                    </div>
                    <div className="contentItem">
                        <p className="tit">需求费用</p>
                        <div className="input">
                            <Select className="widthAll" size="large" placeholder="请选择需求费用">
                                {this.state.budgetAmountList.map((item)=><Select.Option key={item}>{item}</Select.Option>)}
                            </Select>
                        </div>
                    </div>
                    <div className="addDemandBtn"><Button type="primary" onClick={this.props.addDemand}>确认发布</Button></div>
                </div>
            </div>
        )
    }
}
export default DemandContent;