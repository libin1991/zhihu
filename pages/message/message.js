import {MessageModels} from '../../models/messageModels.js';
let messageModels=new MessageModels();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMessage('updata');
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
    this.getMessageByMock('updata',()=> {
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
    this.getMessageByMock('add',()=> {
      wx.hideLoading();
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //延迟获得数据
  getMessageByMock(action,success) {
    setTimeout(()=> {
      this.getMessage(action,success);
    },500);
  },
  //获得消息数据
  getMessage(action,success) {
    messageModels.getMessage('0000-000000-00000',res=> {
      let data=res.data;
      for(let i=0;i<data.length;i++) {
        if(data[i].content.length>=20) {
          data[i].content=data[i].content.substring(0,18)+'...';
        }
      }
      if(action==='updata') {
        this.setData({
          message:data
        });
      }
      else if(action==='add') {
        let message=this.data.message;
        this.setData({
          message:message.concat(data)
        });
      }
      success && success();
    });
  }
})