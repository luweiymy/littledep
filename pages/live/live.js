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
  onReady:function(res){
    // 页面初始化 options为页面跳转所带来的参数
    // String2
    this.videoContext = wx.createContext('myVideo')

  },
  inputValue:'',
  data:{
    src:'',
    danmuList:[
      {
        text:'第1s出现的弹幕',
        color:'#ff00ff',
        time:1
      },
      {
        text:'第3s出现的弹幕',
        color:'#4bacff',
        time:3
      },
      {
        text:'第4s出现的弹幕',
        color:'#aaa',
        time:4
      },
      {
        text:'第4s出现的弹幕',
        color:'#aaa',
        time:4
      },
      {
        text:'第5s出现的弹幕',
        color:'#00ff00',
        time:5
      },
      {
        text:'第10s出现的弹幕',
        color:'#00ff00',
        time:10
      }
      
    ]
  },
  bindInputBlur:function(e){
    this.inputValue = e.detail.value
  },
  bindButtonTap:function(){
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'], // album 从相册选视频，camera 使用相机拍摄
      maxDuration: 60, // 拍摄视频最长拍摄时间，单位秒。最长支持60秒
      camera: ['front', 'back'],
      success: function(res){
        // success
        that.setData({
          src:res.tempFilePath
        })
      }
    })
  },
  // bindSendDanmu:function(){
  //   this.videoContext.sendDanmu({
  //     text:this.inputValue,
  //     color:getRandomColor()
  //   })
  // },
  videoErrorCallback:function(e){
    console.log('视频错误信息：')
    console.log(e.detail.errMsg)
  }
})