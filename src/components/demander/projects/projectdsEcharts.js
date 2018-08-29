import React,{ Component , Http , Url } from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
@connect(
    state=>({
        "customerId":state.userInfo.customerId
    })
)
class ProjectsEcharts extends Component{
    constructor(){
        super()
        this.state={
            stateList:[
                [
                    {
                        word:"审核中",
                        backgroundColor:"rgb(249, 118, 0)",
                        state:""
                    },
                    {
                        word:"执行中",
                        backgroundColor:"rgb(255, 176, 45)",
                        state:""
                    }
                ],
                [
                    {
                        word:"沟通中",
                        backgroundColor:"rgb(114, 215, 214)",
                        state:""
                    },
                    {
                        word:"已完成",
                        backgroundColor:"rgb(63, 178, 226)",
                        state:""
                    }
                ],
                [
                    {
                        word:"签约中",
                        backgroundColor:"rgb(112, 177, 255)",
                        state:""
                    },
                    {
                        word:"已关闭",
                        backgroundColor:"rgb(96, 122, 228)",
                        state:""
                    }
                ]
            ],
            isNeedUpdateRefresh:true
        }
    }
    componentDidMount(){
        this.init()
    }
    componentDidUpdate(){
        // 在用户更新信息之后的数据刷新
        this.init()
    }
    init(){
        // 判断是否可以取到用户登陆信息之后进行用户信息调取
        if(this.props.customerId && this.state.isNeedUpdateRefresh){
            this.getDemandState()
        }
    }
    echartsCreated(valueList){
        var myChart = echarts.init(document.getElementById('projectsEcharts'));
        let keyList=['审核中','执行中','沟通中','已完成',"签约中",'已关闭'];
        let dataList=[]
        keyList.map((item,index)=>{
            dataList.push({
                name:item,
                value:valueList[index]
            })
            return 1;
        })
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:keyList
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:dataList
                }
            ]
        };
        myChart.setOption(option)
    }
    getDemandState(){
        Http({
            url:`${Url.Bussiness}/demand/demandsStaus.shtml`,
            method:"post",
            params:{
                customerId:this.props.customerId
            }
        })
        .then((res)=>{
            let { code , data , msg } = res.data;
            if(code===10000){
                let stateData=this.state.stateList;
                this.echartsCreated([data.examiningCount,data.executingCount,data.communicatingCount,data.doneCount,data.signingCount,data.closedCount])
                stateData[0][0].state=data.examiningCount
                stateData[0][1].state=data.executingCount
                stateData[1][0].state=data.communicatingCount
                stateData[1][1].state=data.doneCount
                stateData[2][0].state=data.signingCount
                stateData[2][1].state=data.closedCount
                this.setState({
                    stateList:stateData,
                    isNeedUpdateRefresh:false
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
            <div className="headOwnTaskStatus clear">
                <div className="ownStateEcharts">
                    <canvas id="projectsEcharts" width="240" height="240" style={{width:'240px',height:'240px'}}></canvas>
                </div>
                <div className="hr"><div></div></div>
                <div className="ownStateTable">
                    <div>
                        {this.state.stateList.map((parentitem,index)=>
                            <div className="tableItem clear" key={`tableItem${index}`}>
                                {parentitem.map((item)=>
                                    <div className="tableItemLine" key={item.word}>
                                        <div className="icon" style={{"backgoundColor":item.backgoundColor}}></div>
                                        <div className="word">
                                            <span>{item.word}</span>
                                            <span className="state">{item.state}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectsEcharts;