//detail.js
//获取应用实例
var app = getApp()
Page({
    list:[],
    onLoad:function(options){
        
        var that = this
        this.setData({
           items : options
        })
      
    },
    onReady:function(){
    // 页面渲染完成
        wx.setNavigationBarTitle({
            title: '详情页面'
        })
  },
  onUnload:function(){
    // 页面关闭
     wx.navigateBack();
  }
})