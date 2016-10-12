//detail.js
//获取应用实例
var app = getApp()
Page({
    list:[],
    onLoad:function(options){
        wx.setNavigationBarTitle({
            title: '详情页面'
        })
        var that = this
        this.setData({
           items : options
        })
       wx.navigateBack();
    }
})