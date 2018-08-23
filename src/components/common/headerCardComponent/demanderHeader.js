import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown , Icon , Menu } from "antd";
import { connect } from "react-redux";
@connect(
    state=>({"state":state})
)
class DemanderHeader extends Component{
    userInfoBtnClick(e){
        if(e.key==='1'){
            this.props.history.push("/demander/projects")
        }
    }
    render(){
        const menu=(
            <Menu onClick={this.userInfoBtnClick.bind(this)}>
                <Menu.Item key={1}>
                    <span>个人中心</span>
                </Menu.Item>
                <Menu.Item key={2}>
                    <span>切换身份</span>
                </Menu.Item>
                <Menu.Item key={3}>
                    <span>退出登录</span>
                </Menu.Item>
            </Menu>
        )
        return (
            <div className="headerBg">
                <div className="header clearfix">
                    <div className="left">
                        <img src="http://www.315free.com/static/img/logo.png" alt=""/>
                        <div><Link to="/work" className="headerLink">工作台</Link></div>
                        <div><Link to="/release" className="headerLink">发布需求</Link></div>
                        <div><Link to="/im" className="headerLink">聊天工具</Link></div>
                    </div>
                    <div className="left right">
                        <div><Link to="/help" className="headerLink">使用帮助</Link></div>
                        <div><Link to="/complaints" className="headerLink">匿名吐槽</Link></div>
                        <div><Link to="/message" className="message headerLink"><Icon type="bell" /></Link></div>
                        <div>
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <span className="nick">{this.props.state.userInfo.nick}</span>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DemanderHeader;