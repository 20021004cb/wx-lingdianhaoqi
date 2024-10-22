Page({

  /**
   * 页面的初始数据
   */
  data: {
    showList:[
      {url:"https://www.lingdianhaoqi.fun/img/hx8.0936e4ae.jpg"},
      {url:"https://www.lingdianhaoqi.fun/img/hx8.0936e4ae.jpg"},
      {url:"https://www.lingdianhaoqi.fun/img/hx12.502e30ba.jpg"},
      {url:"https://www.lingdianhaoqi.fun/img/hx17.10f34bcd.jpg"},
      {url:"https://www.lingdianhaoqi.fun/img/hx16.253134fe.jpg"},
      {url:"https://www.lingdianhaoqi.fun/img/hx13.3e26913b.jpg"},
      {url:"https://www.lingdianhaoqi.fun/img/hx12.502e30ba.jpg"},
      {url:"https://www.lingdianhaoqi.fun/img/hx8.0936e4ae.jpg"},
      {url:"https://www.lingdianhaoqi.fun/img/hx8.0936e4ae.jpg"}
    ],
  },

  // 监听
  activeClick(e) {
    let index = e.currentTarget.dataset.tag;
    this.setData({
      current: index
    })
  }
})
