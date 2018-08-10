import React,{ Component } from "react";
require('./css/recruitment.less')
class Recruitment extends Component{
    constructor(){
        super()
        this.state={
            clickStep:1
        }
    }
    changeStep(event){
        let index = event.target.parentNode.getAttribute('index') || event.target.getAttribute('index');
        index = parseInt(index,10)
        console.log(index)
        this.setState({
            clickStep:index
        })
    }
    render(){
        return (
            <div className='recruitmentBox'>
                <div className="aboutHeadBg">
                    <img src="http://www.315free.com/static/img/footBg.png" alt="关于我们" />
                    <div className="aboutHeadPos">
                        <div>
                            <h1>招贤纳士</h1>
                        </div>
                    </div>
                </div>
                <p className="title">请发送简历至：hr@315pr.com</p>
                <div className={this.state.clickStep!==1?'head clear border':'head clear'} onClick={this.changeStep.bind(this)} ref="" index="1"><span>全栈工程师</span><span>产品技术部</span><span>北京</span></div>
                <div className={this.state.clickStep===1?'content show':'content'}>
                    <div className="content-div">
                        <div className="center">
                            <p>岗位职责：</p>
                            <p>1、负责公司平台产品的基础架构的设计，系统框架搭建以及核心功能开发；</p>
                            <p>2、负责技术攻关和创新技术引用，解决产品开发过程中的高性能，高并发和高可靠性问题。任职要求：</p>
                            <p>3、可以从web前端一直做到java后端；</p>
                            <p>4、三年以上互联网和移动互联开发经验；</p>
                            <p>5、具体开发语言对ios，Android，后台，web前端，java后台都有一定了解；</p>
                            <p>6、对算法，建模有一定了解；</p>
                            <p>7、对数据库有一定了解。</p>
                        </div>
                    </div>
                </div>
                <div className={this.state.clickStep!==2?'head clear border':'head clear'} onClick={this.changeStep.bind(this)} index="2"><span>策划经理</span><span>策划执行部</span><span>北京</span></div>
                <div className={this.state.clickStep===2?'content show1':'content'}>
                    <div className="content-div">
                        <div className="center">
                            <p>岗位职责：</p>
                            <p>1、对特定的行业或企业保持跟踪、关注，进行有针对的研究；</p>
                            <p>2、提出营销传播策略，策划传播事件，撰写营销推广创意方案；</p>
                            <p>3、研究各种媒体传播规律，发现媒体传播的新形式、新特点，向企业提出应用不同媒体组合传播的建议；</p>
                            <p>4、指导、撰写相关市场传播文案，项目总结报告等；</p>
                            <p>5、参与营销传播项目实施；</p>
                            <p>6、组织公司内部及对企业的培训。</p>
                            <p>任职要求：</p>
                            <p>1、热爱广告传媒、会展活动、创意策划与文案工作；</p>
                            <p>2、具备扎实的新闻、传媒基础和文字功底，新闻、中文、市场营销、外语等相关专业背景优先；</p>
                            <p>3、沟通能力强，勤奋爱学习，善于思考，对信息敏感，思维敏捷，逻辑思路清晰；</p>
                            <p>4、乐观开朗，有责任心，具有团队协作意识，与业务团队保持良好密切的沟通；</p>
                            <p>5、对品牌策划/营销策划/公关策划/新媒体传播等有较丰富经验，有成功案例者优先；</p>
                            <p>6、有媒体记者、编辑从业经验，了解媒体采编流程、资讯特点，以及新媒体趋势等优先；</p>
                            <p>7、熟练使用word、xls、ppt等办公软件。</p>
                        </div>
                    </div>
                </div>
                <div className={this.state.clickStep!==3?'head clear border':'head clear'} onClick={this.changeStep.bind(this)} index="3"><span>人力行政总监</span><span>人力行政部</span><span>北京</span></div>
                <div className={this.state.clickStep===3?'content show2':'content'}>
                <div className="el-icon-caret-top"></div>
                    <div className="content-div">
                        <div className="center">
                            <p>岗位职责:</p>
                            <p>1. 根据公司战略与人力资源战略建立和完善公司的招聘流程和招聘体系；</p>
                            <p>2. 根据现有编制及业务发展需求，协调、统计各部门的招聘需求，编制年度人员招聘计划、招聘预算、管理KPI指标；</p>
                            <p>3. 与业务部门紧密沟通，了解招聘需求，制定招聘策略，组织实施招聘活动，完成总体招聘目标，提高招聘效率，改进招聘质量；</p>
                            <p>4. 全面参与重点岗位的招聘运作，包括人才搜寻、面试和评估、与业务部门协调、促成招聘决定、录用商谈、确保顺利入职和试用期维护等；</p>
                            <p>5. 积极有效地跟踪管理招聘全过程，通过数据汇总、进展报告等推动招聘高效率运作。</p>
                            <p>6. 从招聘的角度为业务部提供专业服务，包括进展汇报、针对各职位的招聘建议、流程指导、招聘培训、建立人才储备等，建立良好的合作机制；</p>
                            <p>7. 擅长通过多种渠道建立与候选人的关系，并善于沟通交际；</p>
                            <p>8. 准确分析招聘渠道有效性，仔细进行招聘渠道甄选，严格控制招聘成本预算；</p>
                            <p>9. 负责部门的日常管理工作及部门员工的管理、指导、培训及评估。</p>
                            <p>任职要求：</p>
                            <p>1. 本科及以上学历，人力资源相关专业；</p>
                            <p>2. 5年以上工作经验，至少3年以上招聘团队管理经验；</p>
                            <p>3. 熟悉各类招聘渠道，具备较强的沟通协调能务及分析判断能力；</p>
                            <p>4. 个人招聘能力强，有猎头公司项目管理工作经验者优先。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recruitment;