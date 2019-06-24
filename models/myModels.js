import {MyMock} from '../Mock/myMock.js';
import {DEBUGGER} from '../config.js';
import {HTTP} from '../utils/HTTP.js';

let myMock=new MyMock();
class MyModels extends HTTP {
    constructor (){
        super();
    }

    //获得个人数据
    getMy(id,success) {
        if(!DEBUGGER) {
            let params={
                url:'http://xx.com/My/get',
                data:{
                    id
                },
                success
            };
            this.request(params);
        }
        else {
            let list=myMock.getMy();
            success && success(list);
        }
    }
}
export {MyModels};