//index.js
//获取应用实例
var app = getApp()
var order=['red','yellow','blue','green','red']
Page({
    // 条件渲染
    // data: {
    //     view:'APP'
    // }
    // 模板
    // data: {
    //     staffA:{firstName:'Hulk',lastName:'Hu'},
    //     staffB:{firstName:'Shang',lastName:'You'},
    //     staffC:{firstName:'Gideon',lastName:'Lin'}
    // }
    // 事件
    // data:{
    //     count:1
    // },
    // add:function(e){
    //     this.setData({
    //         count:this.data.count + 1
    //     })
    // }
    // wx:if
    // data:{
    //     length:3
    // }
    // wx:for
    // data:{
    //     items:[{
    //         message:'foo'
    //     },{
    //         message:'bar'
    //     }]
    // }

    // scroll-view
    // data:{
    //     toView:'red',
    //     scrollTop:100
    // },
    // upper:function(e){
    //     console.log(e);
    // },
    // lower:function(e){
    //    console.log(e); 
    // },
    // scroll:function(e){
    //     console.log(e);
    // },
    // tap:function(e){
    //     for(var i = 0;i < order.length;++i){
    //         if(order[i] === this.data.toView){
    //             this.setData({
    //                 toView:order[i + 1]
    //             })
    //             break
    //         }
    //     }
    // },
    // tapMove:function(e){
    //     this.setData({
    //         scrollTop:this.data.scrollTop + 10 
    //     })
    // }


    // view

    // swiper
    // data:{
    //     imgUrls:[
    //         '../../images/1.png',
    //         '../../images/2.png',
    //         '../../images/3.png'
    //     ],
    //     indicatorDots:false,
    //     autoplay:false,
    //     interval:5000,
    //     duration:1000
    // },
    // changeIndicatorDots:function(e){
    //     this.setData({
    //         indicatorDots:!this.data.indicatorDots
    //     })
    // },
    // changeAutoplay:function(e){
    //     this.setData({
    //         autoplay:!this.data.autoplay
    //     })
    // },
    // intervalChange:function(e){
    //     this.setData({
    //         indeterval:e.detail.value
    //     })
    // },
    // durationChange:function(e){
    //     this.setData({
    //         duration:e.detail.value
    //     })
    // }
    
    data:{
        src:''
    },
    bindButtonTap:function(){
        var that = this
        wx.chooseVideo({
            sourceType:['album','camera'],
            maxDuration:60,
            camera:['front','back'],
            success:function(res){
                that.setData({
                    src:res.temFilePath
                })
            }
        })
    },
    videoErrorCallback:function(e){
        console.log('视频错误信息')
        console.log(e.detaile.errMsg)
    }
})