// components/review/review.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      detail:{
        type:Object,
        value:{}
      },
      index:{
        type:Number,
        value:0
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    star:false,
    STAR:'./images/star.png',
    STARFOCUS:'./images/star-focus.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点赞或取消点赞
    clickStar() {
      if(this.data.star) {
        this.setData({
          star:false
        });
        let index=this.properties.index;
        this.triggerEvent('clickStar',{num:-1,index});
      }
      else {
        this.setData({
          star:true
        });
        let index=this.properties.index;
        this.triggerEvent('clickStar',{num:1,index});
      }
    }
  }
})
