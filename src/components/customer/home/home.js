import React,{Component} from "react";
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
                            <div>免费发布需求</div>
                            <div>即刻成为智库</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;