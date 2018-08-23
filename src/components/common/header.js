import React,{Component} from "react";
import "./css/header.less";
import { connect } from "react-redux";
import DemanderHeader from "./headerCardComponent/demanderHeader";
import NoLoginHeader from "./headerCardComponent/noLoginHeader";
@connect(
    state=>({"customerId":state.userInfo.customerId})
)
class Header extends Component{
    render(){
        let ShowHeader;
        if(this.props.customerId){
            ShowHeader=()=><DemanderHeader {...this.props} />
        }else{
            ShowHeader=()=><NoLoginHeader {...this.props} />
        }
        return (
            <ShowHeader />
        )
    }
}
export default Header;