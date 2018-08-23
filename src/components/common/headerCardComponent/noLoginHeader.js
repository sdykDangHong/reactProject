import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
class NoLogin extends Component{
    render(){
        return (
            <div className="headerBg">
                <div className="header clearfix">
                    <div className="left">
                        <img src="http://www.315free.com/static/img/logo.png" alt=""/>
                        <div><Link to="/demand-add">发布需求</Link></div>
                        <div><Link to="/register">成为智库</Link></div>
                    </div>
                    <div className="left right">
                        <div><Link to="/help">使用帮助</Link></div>
                        <div><Link to="/complaints">匿名吐槽</Link></div>
                        <div><Link to="/login" className="message"><Icon type="user" /><i style={{"marginLeft":"6px"}}>登录</i></Link></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NoLogin;