// pages/kitchen/kitchen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgMode: 'aspectFill',
    foodMenu: {}
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
    let vm = this;
    wx.request({
      url: `http://localhost:8888/menu`,
      success: function (result) {
        const data = result.data;
        vm.setData({'foodMenu': data});
      }
    })
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