import React,{ Component } from "react";
import { Tabs , Timeline } from 'antd';
import Header from "../../common/header";
import Footer from "../../common/footer";
require('./css/about.less');
class About extends Component{
    constructor(){
        super();
        this.state={
            statusTab:'1'
        }
    }
    tabChange(activeKey){
        this.setState({
            statusTab:activeKey
        })
    }
    componentDidUpdate(prevProps) {
        if(this.props.location.pathname !== prevProps.location.pathname) {
            let statusTab="1";
            switch (this.props.location.pathname) {
                case '/about':
                    statusTab = '1'
                    break;
                case '/development':
                    statusTab = '2'
                    break;
                case '/contact_us':
                    statusTab = '3'
                    break;
                default:
                    statusTab = '1'
                    break;
            }
            this.setState({
                statusTab: statusTab
            })
        }
    }
    render(){
        const timeList = [
            {
                time:'2015年8月',
                content:"公司在北京成立"
            },
            {
                time:'2015年9月',
                content:"公司获得天使轮数百万人民币投资"
            },
            {
                time:'2015年10月',
                content:"公司获得IVP及天狼星资本pre-A轮2000万人民币投资"
            },
            {
                time:'2015年12月',
                content:"公司开始布局全国市场，并在上海、广州成立分公司"
            },
            {
                time:'2016年2月至4月三',
                content:"三点一刻与洪泰创新空间、优客工场、纳什空间等两百余家知名众创空间达成战略合作，同时签约速8酒店、卓越互动、网龙网络、白石山、优衣库、香港创世纪等知名企业客户"
            },
            {
                time:'2016年12月',
                content:"公司获得数千万A轮融资，并正式发布一系列新品：三点一刻APP、公众号、PC线上官网和线下移动办公"
            }
        ]
        return (
            <div className="container">
                <Header {...this.props} />
                <div className="aboutBox">
                <div className="aboutHeadBg">
                    <img src="http://www.315free.com/static/img/footBg.png" alt="关于我们" />
                    <div className="aboutHeadPos">
                        <div>
                            <h1>欢迎来到我们的团队</h1>
                            <p>Welcome to our team</p>
                        </div>
                    </div>
                </div>
                <div className="tabShow">
                    <Tabs defaultActiveKey={this.state.statusTab}  activeKey={this.state.statusTab} onChange={this.tabChange.bind(this)} >
                        <Tabs.TabPane tab="关于我们" key="1">
                            <div className="content">
                                <div className="contentText">
                                    <div className="tit">公司简介</div>
                                    <div className="text indent">三点一刻隶属于北京三点一刻科技有限公司，成立于2015年8月，是一家通过全球营销freelancer重新排列重组并组建无数线上虚拟公司的协同方式来给客户提供“全网营销服务”的智慧协同营销网络，致力于打造智能的全球营销开放平台。<br/>通过“平台+智库”模式优化营销中间环节，提高效率，实现全开放、复杂型人工智能协同；
                                        自主研发人工智能推荐等技术，让营销供需双方更高效地沟通和营销作业，实现供需双方的收益/效果最大化，让客户少花钱，智库多赚钱。<br/>2016年12月，三点一刻成功完成数千万A轮融资。
                                    </div>
                                </div>
                                <div className="contentText">
                                    <div className="tit">基本信息</div>
                                    <div className="text" style={{"textIndent":"0px"}}>公司名称：北京三点一刻科技有限公司<br/>公司性质：有限责任公司<br/>公司创始人兼CEO：蔡浩宇<br/>总部地点：北京<br/>融资阶段：天使轮、pre-A轮、A轮<br/>成立时间：2015年8月<br/>简称：三点一刻<br/>经营范围：企业市场整合营销一站式服务平台，包含企业品牌公关、全网整合营销等服务内容。
                                    </div>
                                </div>
                                <div className="contentText">
                                    <div className="tit">公司产品</div>
                                    <div className="text indent">三点一刻通过技术力量，建立一个客户需求智能匹配平台和智能营销协同平台，立足于数字新媒体与数字融合营销，研发多个营销智能平台
                                        ，包括营销智能管家平台、DSP/营销大数据精准传播平台、营销众包开放平台、执行媒体人社群平台、人工智能对冲平台等。<br/>围绕智能协同营销平台三点一刻已推出一系列新产品矩阵，包括三点一刻官网、三点一刻APP、三点一刻微信公众号、PC端线上工作台和线下移动办公等，自此三点一刻成功构建智能营销生态1.0。
                                    </div>
                                </div>
                                <div className="contentText">
                                    <div className="tit">经营内容</div>
                                    <div
                                        className="text indent">三点一刻通过技术能力建立一个需求智能匹配的平台和营销众包开放等平台。通过各种数据分析，把企业客户在传播方面的需求进行标准化，并通过DSP等技术进行资源匹配，从而使企业客户进行精准营销。与此同时，营销从业者可以独立或者组队参与项目并得到相应回报。目前三点一刻平台已汇聚全球15万营销领域行家，同时拥有近20万的媒体资源库。</div>
                                </div>
                                <div className="contentText">
                                    <div className="tit">服务领域</div>
                                    <div className="text indent">三点一刻专注于企业市场整合营销一站式服务平台，包含企业品牌公关、全网整合营销等服务内容；成立至今，服务领域覆盖互联网金融、旅游、游戏、电商、快消、影视娱乐、物流、共享经济、二次元等，为数百家知名品牌企业提供个性化数字整合营销，加速其品牌传播，使之在参与国内外市场竞争中处于更有利的位置。目前三点一刻已经与全国两百余家知名孵化器达成战略合作，其中有洪泰创客空间、优客工场、纳什空间等国内知名的众创空间，为入驻空间的上千家企业提供整合营销服务。</div>
                                </div>
                                <div className="contentText">
                                    <div className="tit">发展历程</div>
                                    <div className="text">2015年8月，公司在北京成立<br/>2015年9月，公司获得天使轮数百万人民币投资<br/>2015年10月，公司获得IVP及鼎晟汇众pre-A轮2000万人民币投资<br/>2015年12月，公司开始布局全国市场，并在上海、广州成立分公司<br/>2016年2月至4月，三点一刻与洪泰创新空间、优客工场、纳什么空间等两百余家知名众创空间达成战略合作，同时签约速8酒店、卓越互动、网龙网络、白石山、香港创世纪等数百余家创新企业客户<br/>2016年4月，三点一刻作为唯一移动智能营销平台出席GMIC并发表演讲<br/>2016年6月，三点一刻受邀参加全国互联网大会<br/>2016年12月，公司获得数千万A轮融资，并发布一系列产品矩阵：三点一刻APP、公众号、PC线上官网和线下移动办公
                                    </div>
                                </div>
                                <div className="contentText">
                                    <div className="tit">三点一刻获得荣誉</div>
                                    <div className="text indent">2017年9月，三点一刻荣获广告主2017年度移动营销金坐奖</div>
                                </div>
                                <div className="contentText">
                                    <div className="tit">企业愿景</div>
                                    <div className="text indent">三点一刻致力于为全球营销人提供高效的智能营销协作平台，将共享经济、人工智能与新的分配方式融合在了一起。用共享经济的思维模式改变营销行业，通过智能技术实现营销云平台化，让企业客户降低成本的同时享受高品质营销服务。</div>
                                </div>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="发展历程" key="2">
                            <div className="development">
                                <Timeline pending="Recording...">
                                    {timeList.map((item)=>{
                                        return (
                                            <Timeline.Item key={item.time}>
                                                <div className="clear">
                                                    <div className="time">{item.time}</div>
                                                    <div className="content">{item.content}</div>
                                                </div>
                                            </Timeline.Item>
                                        )
                                    })}
                                </Timeline>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="联系我们" key="3">
                            <div className="contact">
                                <p>客服电话：4008-315-002</p>
                                <p>商务合作：010-57238856</p>
                                <p>客服邮箱：service@315free.com</p>
                                <p>BD邮箱：BD@315free.com</p>
                                <p>对外媒体合作 PR@315free.com</p>
                                <p>地址：北京市朝阳区建国路77号华贸中心T3写字楼3号楼1201</p>
                            </div>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
                <Footer/>
            </div>
        )
    }
}
export default About;