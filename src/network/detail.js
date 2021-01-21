import {request} from "./request";
//引入request封装的方法，对里面放参数。并用方法封着，这样可以在别的地方直接引用，
export function showDetail(iid){
    return request({
    url:"./detail",
        params:{
            iid
        }
    })
}
//因为后台来的数据嵌套太多，准备一个大的对象上去接着，
export class goods{
    constructor (itemInfo, columns,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.Price
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns=columns
        this.services=services
        this.realPrice=itemInfo.lowNowPrice
    }
}
