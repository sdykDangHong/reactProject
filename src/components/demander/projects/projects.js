import React , { Component } from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import ProjectsEcharts from "./projectdsEcharts";
import OwnProject from "./ownProjects";

require("./css/projects.less");
class DemanderProjects extends Component{
    render(){
        return (
            <div className="container">
                <Header {...this.props} />
                <div className="demanderProjects">
                    <ProjectsEcharts />
                    <OwnProject />
                </div>
                <Footer/>
            </div>
        )
    }
}
export default DemanderProjects;