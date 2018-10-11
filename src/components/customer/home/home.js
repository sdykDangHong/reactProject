import React,{Component} from "react";
import { Link } from "react-router-dom";
import Header from "../../common/header";
require('./css/home.less');
class Home extends Component{
    changeCallBack(e){
        console.log(e)
    }
    render(){
        return (
            <div className="container">
                <Header {...this.props}/>
                <div className="homeBox">
                    <div className="home">
                        <div className="img">
                            <img src="http://testwww.315free.com/static/img/index_bg.png" alt="全球智库任您使用海量需求任您选择"/>
                        </div>
                        <div className="btn">
                            <div><Link to="/demands-add">免费发布需求</Link></div>
                            <div><Link to="/register">即刻成为智库</Link></div>
                        </div>
                    </div>
                    <p className="textAlign">2015-2018 北京三点一刻科技有限公司 版权所有 京ICP备：15064808号-1</p>
                </div>
            </div>
        )
    }
}
export default Home;