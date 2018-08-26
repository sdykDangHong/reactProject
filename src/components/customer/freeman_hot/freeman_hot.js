import React,{ Component } from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
require('./css/freeman_hot.less');
class FreemanHot extends Component{
    render(){
        return (
            <div className="container">
                <Header {...this.props}/>
                <div className="freemanHot">
                    <div className="aboutHeadBg">
                        <img src="http://www.315free.com/static/img/footBg.png" alt="关于我们" />
                        <div className="aboutHeadPos">
                            <div>
                                <h1>欢迎来到我们的团队</h1>
                                <p>Welcome to our team</p>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <p className="first">三点一刻全球智库运营分部</p>
                        <p className="second">已有近<span>15万+</span>名来自全球的营销人在这里自由协作</p>
                        <img src="http://www.315free.com/static/img/freeman_hot_Bg.png" alt="智库热点" />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default FreemanHot;