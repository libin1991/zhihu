import {ProblemMock} from '../Mock/problemMock.js';
import {HTTP} from '../utils/HTTP.js';
import {DEBUGGER} from '../config.js';
let problemMock=new ProblemMock();

class ProblemModels extends HTTP {
    constructor() {
        super();
    }

    //获得问题的详情数据
    getProblem(id,success) {
        if(!DEBUGGER) {
            let params={
                url:'http://xx.com/problem/getProblem',
                data:{
                    id
                },
                success
            };
            this.request(params);
        }
        else {
            let data=problemMock.getProblem();
            success && success(data);
        }
    }
    //获得问题的回答
    getProblemReview(id,success) {
        if(!DEBUGGER) {
            let params={
                url:'http://xx.com/problem/getProblemReview',
                data:{
                    id
                },
                success
            };
            this.request(params);
        }
        else {
            let data=problemMock.getProblemReview();
            success && success(data);
        }
    }
}
export {ProblemModels};