import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
class NoLogin extends Component{
    render(){
        var HeaderComponent;
        if(this.props.location.pathname==="/"){
            HeaderComponent=()=>(
                <div>
                    <div><Link to="/projects" className="headerLink">找需求</Link></div>
                    <div><Link to="/freelancers" className="headerLink">找智库</Link></div>
                </div>
            )
        }else{
            HeaderComponent=()=>(
                <div>
                    <div><Link to="/demands-add" className="headerLink">发布需求</Link></div>
                    <div><Link to="/register" className="headerLink">成为智库</Link></div>
                </div>
            )
        }
        return (
            <div className="headerBg">
                <div className="header clearfix">
                    <div className="left">
                        <Link to="/"><img src="http://www.315free.com/static/img/logo.png" alt=""/></Link>
                        <HeaderComponent />
                    </div>
                    <div className="left right">
                        <div><a href="http://help.315free.com/" target="_blank" rel="noopener noreferrer" className="headerLink">使用帮助</a></div>
                        <div><Link to="/login" className="message headerLink"><Icon type="user" /><i style={{"marginLeft":"6px"}}>登录</i></Link></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NoLogin;