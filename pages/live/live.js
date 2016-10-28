// live.js
var app = getApp()
function getRandomColor(){
    let rgb = []
    for(let i = 0; i < 3;++i){
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}
Page({
  data:{
    // String1
  },
  onReady:function(res){
    // 页面初始化 options为页面跳转所带来的参数
    // String2
    this.vedioContext = wx.createContext('myVedio')

  },
  inputValue:'',
  onShow:function(){
    // 页面显示
    // String4
  },
  onHide:function(){
    // 页面隐藏
    // String5
  },
  onUnload:function(){
    // 页面关闭
    // String6
  }
})