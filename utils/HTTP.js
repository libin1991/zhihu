class HTTP {
    constructor() {

    }

    request(params) {
        //默认值处理
        if(!params.url) {
            console.log('url没有传入');
            return;
        }
        if(!params.method) {
            params.method='GET';
        }
        wx.request({
            url:params.url,
            method:params.method,
            data:params.data,
            header:{
                'content-type':'application/json'
            },
            success:res=> {
                let code=res.statusCode.toString().substr(0,1);
                if(code==='2') {
                    params.success && params.success(res.data);
                }
                else {
                    params.error && params.error(res.data);
                }
            },
            fail:()=> {
                console.log('ajax error');
            }
        });
    }
};
export {HTTP};