// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    indexTopShowList:[
      {name:"菜品",url:"https://www.lingdianhaoqi.fun/img/food2.c329686e.jpg"},
      {name:"产品",url:"https://www.lingdianhaoqi.fun/img/food2.c329686e.jpg"},
      {name:"人像",url:"https://www.lingdianhaoqi.fun/img/food2.c329686e.jpg"},
      {name:"菜品",url:"https://www.lingdianhaoqi.fun/img/food2.c329686e.jpg"},
      {name:"菜品",url:"https://www.lingdianhaoqi.fun/img/food2.c329686e.jpg"},
      {name:"菜品",url:"https://www.lingdianhaoqi.fun/img/food2.c329686e.jpg"},
      {name:"菜品",url:"https://www.lingdianhaoqi.fun/img/food2.c329686e.jpg"}
    ],
    show: false,
  },
  onShow(){
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  },
  longPressHandler: function(e) {
    // 处理长按事件
    var url=e.target.dataset.src
    console.log(url)
    wx.scanCode({
      scanType: ['qrCode'],
      success: function(res) {
        console.log(res.result);
      }
    });
  },
  goAllImage(){
    wx.switchTab({
      url: '/pages/photo/index'
    })
  }
})
