Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items:{
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //打开回答详情
    clickItems() {
      let index=this.properties.index;
      this.triggerEvent('clickItems',{index});
    },
    //打开问题详情
    clickMore() {
      let index=this.properties.index;
      this.triggerEvent('clickMore',{index});
    }
  }
})
