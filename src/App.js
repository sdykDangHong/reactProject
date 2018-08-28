import React, {Component} from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router/router";
import axios from "./axios/axios";
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import "./static/reset.css";
React.Http=axios;
React.Url={
    Bussiness:"/gate/sdyk-bussiness",
    Rcmd:"/rcmd",
    Border:"/gate/sdyk-border-service",
    version:"v202",
};
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <LocaleProvider locale={zh_CN}>
                    <Router/>
                </LocaleProvider>
            </Provider>
        );
    }
}

export default App;
