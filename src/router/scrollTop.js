import { Component } from "react";
import {withRouter} from "react-router-dom";

class ScrollTop extends Component{
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            let scrollTopTime=setInterval(()=>{
                let top=document.body.scrollTop || document.documentElement.scrollTop;
                if(top<=0){
                    clearInterval(scrollTopTime)
                }else{
                    document.body.scrollTop = document.documentElement.scrollTop = top-top/20;
                }
            },10)
        }
    }
    render() {
        return this.props.children;
    }
}
export default withRouter(ScrollTop);