import React,{ Component } from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import OwnProject from "./ownProjects";
require("./css/projects.less");
class FreelancerProjects extends Component{
    render(){
        return (
            <div className="container">
                <Header {...this.props}/>
                <div className="freelancerProjects">
                    <OwnProject/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default FreelancerProjects;