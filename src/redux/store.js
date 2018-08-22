import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

function count(state={},data){
    return {
        userInfo:{},
        isShowLoading:false,
        type:"init",
        ...state,
        ...data
    }
}

const store= createStore(count,applyMiddleware(thunk));
export default store;