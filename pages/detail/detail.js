//detail.js
//获取应用实例
var app = getApp()
Page({
    list:[],   
    onLoad:function(options){
        var that = this
        this.setData({
           items : options,
           share:{
                mode:'aspectFit',
                src:'../../images/share.png'
            },
            thumbup:{
                mode:'aspectFit',
                src:'../../images/thumbup.png'
            },
            comment:{
                mode:'aspectFit',
                src:'../../images/comment.png'
            },
            shareto:[{
                    mode:'aspectFit',
                    src:'../../images/qq.png'    
                },{
                    mode:'aspectFit',
                    src:'../../images/wx.png'  
                },{
                    mode:'aspectFit',
                    src:'../../images/pengyou.png'  
                },{
                    mode:'aspectFit',
                    src:'../../images/weibo.png'  
                }],
            modalHidden:true
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
  },
  shareNews:function(){
    // 事件处理
    this.setData({
        modalHidden:false
    })
  },
  modalChange:function(){
    this.setData({
        modalHidden:true
    })
  }
})