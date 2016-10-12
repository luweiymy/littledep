/*ymy.js*/ 
var app = getApp()
var utils = require('../../utils/util.js')
Page({
    data: {
        list: [],
        duration: 2000,
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        loading: false,
        plain: false
    },
    onLoad: function () {
        var that = this
        wx.request({
            url: 'http://news-at.zhihu.com/api/4/news/latest',
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                that.setData({
                    banner: res.data.top_stories,
                    list: [{ header: '今日热闻' }].concat(res.data.stories),
                    conTitle:res.data.stories
                })
            }
        })
         this.index = 1
    }
        
})