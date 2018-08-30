import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown , Icon } from "antd";
import { connect } from "react-redux";
@connect(
    state=>({"state":state})
)
class FreelancerHeader extends Component{
    render(){
        return (
            <div className="headerBg">
                <div className="header clearfix">
                    <div className="left">
                        <Link to="/"><img src="http://www.315free.com/static/img/logo.png" alt=""/></Link>
                        <div><Link to="/freelancer/projects" className="headerLink">工作台</Link></div>
                        <div><Link to="/freelancer/search-projects" className="headerLink">找需求</Link></div>
                    </div>
                    <div className="left right">
                        <div><Link to="/help" className="headerLink">使用帮助</Link></div>
                        <div><Link to="/complaints" className="headerLink">匿名吐槽</Link></div>
                        <div><Link to="/message" className="message headerLink"><Icon type="bell" /></Link></div>
                        <Dropdown overlay={this.props.menu} placement="bottomCenter">
                            <div className="nickBox">
                                <div className="cardIcon"><img src="http://testwww.315free.com/static/img/freelancerImg.png" alt="乙方"/></div>
                                <div className="nick">{this.props.state.userInfo.nick}</div>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
}
export default FreelancerHeader;