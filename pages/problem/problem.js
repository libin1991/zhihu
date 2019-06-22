import {ProblemModels} from '../../models/problemModels.js';
let problemModels=new ProblemModels();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    problem:{
      title:'',
      content:'',
      follow_num:0,
      review_num:0
    },
    problemReview:[],
    follow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProblem();
    this.getProblemReview('updata');
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
    this.getProblemReviewByMock('updata',()=> {
      wx.stopPullDownRefresh();
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title:'加载中..'
    });
    this.getProblemReviewByMock('add',()=> {
      wx.hideLoading();
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //获得问题详情
  getProblem() {
    //传入问题ID
    problemModels.getProblem('0000-00000000-0000',res=> {
      let data=res.data;
      this.setData({
        problem:data
      });
    });
  },
  //延迟获得问题的回答
  getProblemReviewByMock(action,success) {
    setTimeout(()=> {
      this.getProblemReview(action,success);
    },500);
  },
  //获得问题的回答
  getProblemReview(action,success) {
    //传入问题ID
    problemModels.getProblemReview('0000-00000000-0000',res=> {
      let data=res.data;
      if(action==='updata') {
        this.setData({
          problemReview:data
        });
      }
      else if(action==='add') {
        let problemReview=this.data.problemReview;
        this.setData({
          problemReview:problemReview.concat(data)
        });
      }
      success && success();
    });
  },
  //打开回答详情
  clickItems() {
    wx.navigateTo({
      url:'/pages/detail/detail?id='+'0000-00000000-0000'
    });
  },
  //关注问题
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