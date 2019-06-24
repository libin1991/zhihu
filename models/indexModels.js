import {IndexMock} from '../Mock/indexMock.js' ;
import {HTTP} from '../utils/HTTP.js';
//DEBUGGER为true表示请求虚拟数据
import {DEBUGGER} from '../config.js';
let indexMock=new IndexMock();

class IndexModels extends HTTP{
    constructor (){
        super();
    }
    //请求首页数据
    getIndexList(data,success) {
        if(!DEBUGGER) {
            let params={
                url:'http://xxx.com/Index/List',
                data:data,
                success:success
            };
            this.request(params);
        }
        else {
            let list=indexMock.getIndexList();
            success && success(list);
        }
    }
}

export {IndexModels};