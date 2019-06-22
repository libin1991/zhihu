import {MyModels} from '../../models/myModels.js';
let myModels=new MyModels();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my:{
      name:'',
      img:''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMy();
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
  //获得个人数据
  getMy() {
    //传入用户ID
    myModels.getMy('0000-00000000-0000',res=> {
      let data=res.data;
      console.log(data);
      this.setData({
        my:data
      });
    });
  }
})