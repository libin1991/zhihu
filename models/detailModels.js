import {HTTP} from '../utils/HTTP.js';
import {DetailMock} from '../Mock/detailMock.js';
import {DEBUGGER} from '../config.js';
let detailMock=new DetailMock();

class DetailModels extends HTTP {
    constructor (){
        super();
    }
    //获得详情页面数据
    getDetail(id,success) {
        if(!DEBUGGER) {
            let params={
                url:'http://xx.com/Detail/getDetail',
                data:{id},
                success:success
            };
            this.request(params);
        }
        else {
            let list=detailMock.getDetail();
            success && success(list);
        }
    }
}
export {DetailModels};