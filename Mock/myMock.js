let Mock=require('./mock-min.js');
const Random=Mock.Random;

class MyMock {
    construcotr() {

    }

    //返回个人模拟数据
    getMy() {
        let data=Mock.mock({
            'status':'0',
            'msg':'',
            'data':{
                'name':'@word(5,10)',
                'img':Random.img('100x100','#345345','#fff','name')
            }
        });
        return data;
    }
}
export {MyMock};