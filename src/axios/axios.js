import axios from "axios";
import store from "../redux/store";
// 超时时间
axios.defaults.timeout =60000
axios.interceptors.request.use(config => {
    if(!config.hideLoading){
        store.dispatch({type:"axiosRequestReset",isShowLoading:true,redirectToLogin:false})
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