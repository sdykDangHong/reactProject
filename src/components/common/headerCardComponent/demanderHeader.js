import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown , Icon } from "antd";
import { connect } from "react-redux";
@connect(
    state=>({"state":state})
)
class DemanderHeader extends Component{
    render(){
        return (
            <div className="headerBg">
                <div className="header clearfix">
                    <div className="left">
                        <Link to="/"><img src="http://www.315free.com/static/img/logo.png" alt=""/></Link>
                        <div><Link to="/demander/projects" className="headerLink">工作台</Link></div>
                        <div><Link to="/demands-add" className="headerLink">发布需求</Link></div>
                        <div><Link to="/im" className="headerLink">聊天工具</Link></div>
                    </div>
                    <div className="left right">
                        <div><a href="http://help.315free.com/" target="_blank" rel="noopener noreferrer" className="headerLink">使用帮助</a></div>
                        <div><Link to="/complaints" className="headerLink">匿名吐槽</Link></div>
                        <div><Link to="/message" className="message headerLink"><Icon type="bell" /></Link></div>
                        <Dropdown overlay={this.props.menu} placement="bottomCenter">
                            <div className="nickBox">
                                <div className="cardIcon"><img src="http://testwww.315free.com/static/img/demanderImg.png" alt="甲方"/></div>
                                <div className="nick">{this.props.state.userInfo.nick}</div>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
}
export default DemanderHeader;