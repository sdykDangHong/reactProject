import React , { Component } from "react";
import {withRouter} from "react-router-dom";
import Scrollbars from 'react-custom-scrollbars';

window.onresize=function(){
    ScrollTop.resizeCallback()
}

class ScrollTop extends Component{
    constructor(){
        super()
        this.state={
            Width:window.innerWidth,
            Height:window.innerHeight
        }
        ScrollTop.resizeCallback=this.resizeCallback.bind(this);
    }
    resizeCallback(){
        this.setState({
            Width:window.innerWidth,
            Height:window.innerHeight,
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            let componentVm=this.refs.scrollBars
            let scrollTopTime=setInterval(()=>{
                let top=componentVm.getScrollTop()
                if(top<=0){
                    clearInterval(scrollTopTime)
                }else{
                    componentVm.scrollTop(top-top/20);
                }
            },10)
        }
    }
    render() {
        return (
            <Scrollbars ref='scrollBars' style={{ width:this.state.Width, height:this.state.Height }} autoHide id="scrollBar">
                {this.props.children}
            </Scrollbars>
        )
    }
}
export default withRouter(ScrollTop);