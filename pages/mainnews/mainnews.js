// 主题日报
var app = getApp()
Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
        url:'http://news-at.zhihu.com/api/4/news/latest',
        headers: {
            'Content-Type': 'application/json'
        },
        success: function (res) {
            console.log(res)
            that.setData({
                mainnews:res.data.top_stories
            })
        }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})