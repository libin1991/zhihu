import {MessageMock} from '../Mock/messageMock.js';
import {DEBUGGER} from '../config.js';
import {HTTP} from '../utils/HTTP.js';
let messageMock=new MessageMock();

class MessageModels extends HTTP {
    constructor () {
        super();
    }

    //请求消息数据
    getMessage(id,success) {
        if(!DEBUGGER) {
            const params={
                data:{
                    id
                },
                success
            };
            this.request(params);
        }
        else {
            let list=messageMock.getMessage();
            success && success(list);
        }
    }
}
export {MessageModels};