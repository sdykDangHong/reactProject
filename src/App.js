import React, {Component} from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router/router";
import axios from "./axios/axios";
import "./static/reset.css";
React.Http=axios;
React.Url={
    Bussiness:"/gate/sdyk-bussiness",
    Rcmd:"/rcmd",
};
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;
