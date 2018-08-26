import axios from "axios";
import store from "../redux/store";
import { getCookie } from "../util/util";
// 超时时间
axios.defaults.timeout =60000
axios.interceptors.request.use(config => {
    if(!config.hideLoading){
        store.dispatch({type:"axiosRequestReset",isShowLoading:true,redirectToLogin:false})
    }
    if(getCookie("com.sdykToken")){
        // 延续cookie有效时间
        let time=new Date(new Date().getTime()+(store.getState().tokenEffective)).toUTCString();
        document.cookie =`com.sdykToken=${getCookie("com.sdykToken")};path=/;expires=${time}`;
        // 添加全局请求token认证
        config.headers.token=getCookie("com.sdykToken")
    }
    return config
},error =>{
    store.dispatch({type:"axiosRequestError",isShowLoading:false})
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
    store.dispatch({type:"axiosResponseEditLoading",isShowLoading:false})
    // store.dispatch({type:"axiosResponseEditLoading",redirectToLogin:true})
    return data
},error =>{
    store.dispatch({type:"ajaxEditLoading",isShowLoading:false})
    return Promise.reject(error)
})
export default axios;