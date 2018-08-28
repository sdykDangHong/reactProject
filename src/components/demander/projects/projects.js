import React , { Component } from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import ProjectsEcharts from "./projectdsEcharts";

require("./css/projects.less");
class DemanderProjects extends Component{
    render(){
        return (
            <div className="container">
                <Header {...this.props} />
                <div className="demanderProjects">
                    <ProjectsEcharts />
                </div>
                <Footer/>
            </div>
        )
    }
}
export default DemanderProjects;