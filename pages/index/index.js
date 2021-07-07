Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  imgUrl: app.data.imgUrl,
    start: false,
    images: ["https://picsum.photos/360/460?random=1", 
             "https://picsum.photos/360/460?random=2",
             "https://picsum.photos/360/460?random=3", 
             "https://picsum.photos/360/460?random=4", 
             "https://picsum.photos/360/460?random=5"],
    qiu: true,
    imagess: null
  },

  /**
   * 点击扭蛋机
   */
  eggPlay() {

    this.setData({
      start: true,
    })
    setTimeout(() => {
      this.setData({
        start: false,
        qiu: false,
      })
    }, 2000);
    var i = Math.ceil(Math.random() * 5);
    console.log(this.data.images[i - 1]);

    this.setData({
      qiu: true,
      imagess: this.data.images[i - 1]
    })
  }
})