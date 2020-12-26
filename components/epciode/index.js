// components/epciode/index.js.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      value:10,
      observer:function(e){
        console.log(e)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year:null,
    month:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
