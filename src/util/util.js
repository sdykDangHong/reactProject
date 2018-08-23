// 获取cookie
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    arr=document.cookie.match(reg)
    if(arr)
        return (arr[2]);
    else
        return null;
}
export {
    getCookie
}