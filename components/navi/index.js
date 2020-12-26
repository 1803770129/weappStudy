// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'你不知道的JavaScript(上卷)'
    },
    first:{
      type:Boolean,
      value:true
    },
    latest:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftImg:'images/triangle@left.png',
    leftImgDis:'images/triangle.dis@left.png',
    rightImg:'images/triangle@right.png',
    rightImgDis:'images/triangle.dis@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageLeft(){
      if(!this.properties.first){
        this.triggerEvent('left',{
          latest:true,
        },{})
      }
      
    },
    imageRight(){
      if(!this.properties.latest){
        this.triggerEvent('right',{
          first:false
        },{})
      }
      
    }
  }
})
