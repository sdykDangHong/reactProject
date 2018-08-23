import React, {Component} from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router/router";
import axios from "./axios/axios";
import "./static/common.less";
React.Http=axios;
React.Url={
    Bussiness:"/gate/sdyk-bussiness",
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
