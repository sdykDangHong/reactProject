import React,{Component} from "react";
import { Tabs } from 'antd';
import Header from "../common/header";
require('./css/home.less');
class Home extends Component{
    changeCallBack(e){
        console.log(e)
    }
    render(){
        return (
            <div className="container">
                <Header {...this.props}/>
                <div className="home">
                    <Tabs defaultActiveKey="1" onChange={this.changeCallBack}>
                        <Tabs.TabPane tab="需求列表" key="1">Content of Tab Pane 1</Tabs.TabPane>
                        <Tabs.TabPane tab="需求状态" key="2">Content of Tab Pane 2</Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default Home;