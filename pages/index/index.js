//index.js
//获取应用实例
var app = getApp()
var common = require('../../script/common.js')
Page({
  data: {
    motto: 'Hello World0',
    userInfo: {},
    text:'init data',
    array:[{msg:'1'},{msg:'2'}]
  },
  helloMINA:function(){
    common.sayHello('MINA')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  viewTap:function(){
    console.log('view tap');
  }
})
