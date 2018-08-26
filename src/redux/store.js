import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

function count(state={},data){
    return {
        userInfo:{},
        // 判断是否显示loading
        isShowLoading:false,
        tokenEffective:1000*60*60*2,
        type:"init",
        ...state,
        ...data
    }
}

const store= createStore(count,applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;