let Mock=require('./mock-min.js');
const Random=Mock.Random;

class MessageMock {
    constructor() {

    }

    //消息模拟数据
    getMessage() {
        let data=Mock.mock({
            'status':'0',
            'msg':'',
            'data|10':[{
                'portrait':Random.img('80x80', '#ngafgf', '#000', '@word(1,2)'),
                'name':'@word(1,8)',
                'time':'@date(yyyy-MM-dd)',
                'content':'@cparagraph(1,8)'
            }]
        });
        return data;
    }
}
export {MessageMock};