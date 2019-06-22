import { IndexModels } from '../../models/indexModels';
let indexModels = new IndexModels();
//获取应用实例
const app = getApp();

Page({
  data: {
    rows: 20,
    page: 1,
    items: [

    ]
  },
  onLoad() {
    this.getIndexList('updata');
  },
  //下拉刷新事件
  onPullDownRefresh() {
      this.getIndexListByMock('updata',()=>{
        wx.stopPullDownRefresh();
      });
  },
  //上拉加载更多事件
  onReachBottom() {
    wx.showLoading({
      title: '加载中..'
    });
    this.getIndexListByMock('add',()=> {
      wx.hideLoading();
    });
  },
  //设置延迟获得mock数据
  getIndexListByMock(action,success) {
    setTimeout(()=> {
      this.getIndexList(action,success)
    },500);
  },
  //获得数据集合
  getIndexList(action,success) {
    let data = {
      page: this.data.page,
      rows: this.data.rows
    };
    indexModels.getIndexList(data, res => {
      const itemArr = [];
      for (let i = 0; i < res.data.length; i++) {
        let data = res.data[i];
        const obj = {
          id: data.id,
          title: data.title,
          imgUrl: data.img,
          author: data.author,
          content: data.content,
          starNum: data.star_num,
          reviewNum: data.review_num
        };
        itemArr.push(obj);
      }
      if(action==='add') {
        let items=this.data.items;
        this.setData({
          items:items.concat(itemArr)
        });
      }
      else if(action==='updata') {
        this.setData({
          items:itemArr
        });
      }
      success && success();
    });
  },
  //点击回答打开详情
  clickItems(event) {
    let index=event.detail.index;
    let id=this.data.items[index].id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id
    });
  },
  //点击打开问题详情
  clickMore(event) {
    let index=event.detail.index;
    let id=this.data.items[index].id;
    wx.navigateTo({
      url:"/pages/problem/problem?id="+id
    });
  }
});
