// pages/kitchen/kitchen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgMode: 'aspectFill',
    sautes: [
      { 'id': 'food-000001', 'name': '回锅肉', 'imgUrl': 'http://img3.imgtn.bdimg.com/it/u=876799413,3023526702&fm=27&gp=0.jpg'},
      { 'id': 'food-000002', 'name': '蒜薹炒肉', 'imgUrl': 'http://img4.imgtn.bdimg.com/it/u=1726172795,279360365&fm=200&gp=0.jpg'},
      { 'id': 'food-000002', 'name': '土豆丝', 'imgUrl': 'http://img2.imgtn.bdimg.com/it/u=2100948825,3834398967&fm=11&gp=0.jpg'},
      { 'id': 'food-000003', 'name': '藕片', 'imgUrl': 'http://img4.imgtn.bdimg.com/it/u=1388693028,2038394116&fm=27&gp=0.jpg' },
    ],
    hardFoods: [
      { 'id': 'food-000004', 'name': '清蒸鱼', 'imgUrl': 'http://img3.imgtn.bdimg.com/it/u=4127140484,1827845669&fm=27&gp=0.jpg' },
      { 'id': 'food-000005', 'name': '炖排骨', 'imgUrl': 'http://img4.imgtn.bdimg.com/it/u=898854617,3598969995&fm=27&gp=0.jpg' },
      { 'id': 'food-000006', 'name': '烧牛肉', 'imgUrl': 'http://img1.imgtn.bdimg.com/it/u=2101099225,2394145066&fm=200&gp=0.jpg' },
    ],
    snacks: [
      { 'id': 'food-000007', 'name': '狼牙土豆', 'imgUrl': 'http://img2.imgtn.bdimg.com/it/u=3836923942,4132371950&fm=27&gp=0.jpg' },
    ],
    coldDishes: [
      { 'id': 'food-000008', 'name': '凉拌黄瓜', 'imgUrl': 'http://img2.imgtn.bdimg.com/it/u=3293415850,3144586682&fm=27&gp=0.jpg' }
    ],
    breakfasts: [
      { 'id': 'food-000009', 'name': '鸡蛋仔', 'imgUrl': 'http://img2.imgtn.bdimg.com/it/u=3647053653,4083283773&fm=27&gp=0.jpg' },
      { 'id': 'food-000010', 'name': '蒸蛋', 'imgUrl': 'http://img1.imgtn.bdimg.com/it/u=843316550,4196301975&fm=27&gp=0.jpg' },
      { 'id': 'food-000011', 'name': '牛奶饼干', 'imgUrl': 'http://img3.imgtn.bdimg.com/it/u=3222193250,863123359&fm=200&gp=0.jpg' }
    ],
  },
  goFoodDetails (e) {
    let info = e.currentTarget.dataset.info;
    wx.navigateTo({
      url: `/pages/foodDetail/foodDetail?id=${info.id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('load')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('ready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('unload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('pull down refresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('reach bottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('share app message')
  }
})