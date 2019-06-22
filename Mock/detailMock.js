let Mock = require('./mock-min.js');
const Random=Mock.Random;

class DetailMock {
    constructor () {

    }

    //详情页面模拟数据
    getDetail() {
        return Mock.mock({
            'status':'0',
            'msg':'',
            'data':{
                'title':'@ctitle(1,8)',
                'answer_num':'@integer(1,1000)',
                'id':'@guid()',
                'answer_img':Random.img('16x16', '#4A7BF7','#000','@word(1,2)'),
                'answer_name':'@cword(1,5)',
                'answer_content':'@cparagraph(5,30)',
                'answer_star':'@integer(1,1000)',
                'updata_time':'@date(yyyy-MM-dd)',
                'review_num|2-10':0,
                'review|2-10':[
                    {
                        'review_img':Random.img('16x16', '#4A7BF7','#000','@word(1,2)'),
                        'review_name':'@word(1,5)',
                        'review_star':'@integer(10,100)',
                        'review_content':'@cparagraph(1,3)'
                    }
                ]
            }
        });
    }
}
export {DetailMock};