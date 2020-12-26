// components/music/index.js
import {classicBeh} from '../classic_beh.js'
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBeh],
  properties: {
  },
  attached(){
    console.log(this.properties.content);
  },
  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:'images/player@waitting.png',
    playSrc:'images/player@playing.png',
    bgSrc:'images/baijin.jpg'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
