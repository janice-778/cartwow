import {request} from "./request";
export function getnetmutidata(){
    return request({
        url:'/home/multidata'
    })
}
//主页选择不同的请求头
export function gethomegoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}