import React, { Component } from 'react';
import { BrowserRouter , Route , Switch , Redirect } from "react-router-dom";
import "./static/common.less";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import About from "./components/about/about";
import Team from "./components/team/team";
import Recruitment from "./components/recruitment/recruitment";
import FreemanHot from "./components/freeman_hot/freeman_hot";
class RouterSet extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Route path="/" exact render={()=> (
                    <Redirect to='/homepage'/>
                )}/>
                <Route path="/homepage" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/about" component={About}/>
                <Route path="/development" component={About}/>
                <Route path="/contact_us" component={About}/>
                <Route path="/team" component={Team}/>
                <Route path="/recruitment" component={Recruitment}/>
                <Route path="/freeman_hot" component={FreemanHot}/>
                {this.props.location.pathname!=='/homepage'?(<Footer/>):''}
            </div>
        )

    }
}
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <RouterSet />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
