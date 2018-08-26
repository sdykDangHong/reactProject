import React,{ Component } from "react"
import { First , Second } from "./teamJson";
import Header from "../../common/header";
import Footer from "../../common/footer";
require('./css/team.less');
class Team extends Component{
    render(){
        return (
            <div className="container">
                <Header {...this.props}/>
                <div className="teamBox">
                    <div className="aboutHeadBg">
                        <img src="http://www.315free.com/static/img/footBg.png" alt="关于我们" />
                        <div className="aboutHeadPos">
                            <div>
                                <h1>团队介绍</h1>
                            </div>
                        </div>
                    </div>
                    <h1 className={'teamTitle'}>核心团队</h1>
                    <div className="content clear">
                        {First.map((item,index)=>{
                            return (
                                <div className="content-div" key={item.name}>
                                    <div className="img">
                                        <img src={item.imgSrc} alt={item.name} />
                                    </div>
                                    <div className={index===0?'content-body borderNone':"content-body"}>
                                        <p className="tit">{item.name}</p>
                                        <p className="tit">{item.card}</p>
                                        <p className="text textLeft">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="content2 content clear">
                        {Second.map((item,index)=>{
                            return (
                                <div className="content-div" key={item.name}>
                                    <div className="img">
                                        <img src={item.imgSrc} alt={item.name} />
                                    </div>
                                    <div className={index===0?'content-body borderNone':"content-body"}>
                                        <p className="tit">{item.name}</p>
                                        <p className="tit">{item.card}</p>
                                        <p className="text textLeft">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Team;