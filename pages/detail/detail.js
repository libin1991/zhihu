import {DetailModels} from '../../models/detailModels.js';
let detailModels=new DetailModels();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    detail:{
      title:'',
      answer_num:'',
      id:'',
      answer_img:'',
      answer_name:'',
      answer_content:'',
      answer_star:'',
      updata_time:'',
      review_num:'',
      review:[]
    },
    follow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id===undefined?-1:options.id;
    this.setData({
      id
    });
    this.getDetail(id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //获得详情页面数据
  getDetail(id) {
    detailModels.getDetail(id,res=> {
      let data=res.data;
      let detail={
        title:data.title,
        answer_num:data.answer_num,
        id:data.id,
        answer_img:data.answer_img,
        answer_name:data.answer_name,
        answer_content:data.answer_content,
        answer_star:data.answer_star,
        updata_time:data.updata_time,
        review_num:data.review_num,
        review:[]
      };
      const arr=[];
      if(data.review.length>=2) {
        for(let i=0;i<2;i++) {
          arr.push(data.review[i]);
        }
      }
      detail.review=arr;
      this.setData({
        detail
      });
    });
  },
  //跳转到问题主页
  clickTitle() {
    wx.navigateTo({
      url:'/pages/problem/problem'
    });
  },
  //点赞
  clickStar(event) {
    let num=event.detail.num;
    let index=event.detail.index;

    let detail=this.data.detail;
    let review=detail.review[index];
    review.review_star=parseInt(review.review_star)+parseInt(num);
    this.setData({
      detail
    });
    //发送ajax请求
  },
  //关注回答者
  clickFollow() {
    if(this.data.follow) {
      this.setData({
        follow:false
      });
    }
    else {
      this.setData({
        follow:true
      });
    }
  }
})