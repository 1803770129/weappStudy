// pages/classic/classic.js
import {Classic} from '../../models/classic.js'
let classic = new Classic()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:{},
    first:true,
    latest:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      classic:{
        title:'你不知道的javascript(上卷)'
      }
    })
      classic.getBrands((res)=>{
          this.setData({
            brandList:res.data
          })
      })
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
  onLike:function(evt){
    let behavior = evt.detail.behavior
  },
  onLeft(evt){
    this.setData({
      latest:evt.detail.latest
    })
  },
  onRight(evt){
    this.setData({
      first:evt.detail.first
    })
  }
})