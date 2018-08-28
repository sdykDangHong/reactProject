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
            ]
        }
    }
    componentDidMount(){
        this.getDemandState()
        this.echartsCreated()
    }
    echartsCreated(){
        var myChart = echarts.init(document.getElementById('projectsEcharts'));
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
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
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
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
                stateData[0][0].state=data.examiningCount
                stateData[0][1].state=data.executingCount
                stateData[1][0].state=data.communicatingCount
                stateData[1][1].state=data.doneCount
                stateData[2][0].state=data.signingCount
                stateData[2][1].state=data.closedCount
                this.setState({
                    stateList:stateData
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