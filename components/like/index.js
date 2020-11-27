// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number,
      value:99
    },
    like:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yes_url: 'images/like.png',
    no_url: 'images/like@dis.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(e){
      let count = this.properties.like? this.properties.count - 1 : this.properties.count + 1
      this.setData({
        like:!this.properties.like,
        count:count
      })
      // 激活事件 => 事件名称 , detail , 不可以自己定义
      let behavior = this.properties.like?'like':'cancel'
      this.triggerEvent('like',{
        behavior:behavior
      },{})
    }
  }
})
