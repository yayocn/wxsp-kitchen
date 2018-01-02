// pages/orderList/orderList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgMode: 'aspectFill',
    orderList: []
  },
  completeOrder (e) {
    let vm = this;
    let orderId = e.currentTarget.dataset.item._id;
    app.request.completeOrder({
      orderId: orderId,
      callback (data) {
        app.request.getOrderList({
          isFinish: false,
          callback(data) {
            vm.setData({
              orderList: data
            })
          }
        });
      }
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let vm = this;
    app.request.getOrderList({
      isFinish: false,
      callback (data) {
        vm.setData({
          orderList: data
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})