let Mock = require('./mock-min.js');
const Random = Mock.Random;

class ProblemMock {
    constructor() {

    }

    //返回问题模拟数据
    getProblem() {
        let data = Mock.mock({
            'status':'0',
            'msg':'',
            'data':{
                'title': '@title(3,5)',
                'content': '@cparagraph(1,6)',
                'follow_num': '@integer(1,1000)',
                'review_num': '@integer(1,500)'
            }
        });
        return data;
    }

    //返回问题的回答模拟数据
    getProblemReview() {
        let data = Mock.mock({
            'status': '0',
            'msg': '',
            'data|10': [{
                'id': '@guid()',   //id
                'img': Random.img('16x16', '#4A7BF7', '#000', '@word(1,2)'),   //头像
                'title': '@ctitle(1,8)',                    //标题
                'author': '@word(1,8)',                     //作者
                'content': '@cparagraph(1)',                 //正文
                'star_num': '@integer(0,10000)',            //点赞数量
                'review_num': '@integer(0,1000)'            //回复数量
            }]
        });
        return data;
    }
}
export {ProblemMock};