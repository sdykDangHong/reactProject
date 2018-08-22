import React, { Component } from "react";
import { Route , Switch } from "react-router-dom";
import Recruitment from "../components/recruitment/recruitment";
import Home from "../components/home/home";
import Login from "../components/login/login";
import FreemanHot from "../components/freeman_hot/freeman_hot";
import About from "../components/about/about";
import Team from "../components/team/team";
class Customer extends Component{
    render(){
        return (
            <Switch>
                <Route path="/homepage" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/about" component={About}/>
                <Route path="/development" component={About}/>
                <Route path="/contact_us" component={About}/>
                <Route path="/team" component={Team}/>
                <Route path="/recruitment" component={Recruitment}/>
                <Route path="/freeman_hot" component={FreemanHot}/>
            </Switch>
        )
    }
}
export default Customer;