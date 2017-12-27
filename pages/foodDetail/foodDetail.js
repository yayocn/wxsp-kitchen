const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: {
      orderList: [],
      listClass: '',
      selectedList: []
    }
  },
  goBack (e) {
    wx.navigateBack({
      delta: 1
    })
  },
  addMenu(e) {
    let item = e.target.dataset.item;
    let food = {
      pic: item.pic,
      name: item.name,
      _id: item._id
    };
    let orderList = wx.getStorageSync('orderList');
    orderList.push(food);
    this.updateOrderList(orderList);
  },
  updateOrderList: function (list) {
    wx.removeStorageSync('orderList')
    wx.setStorageSync('orderList', list);
    this.setData({ ['order.orderList']: list });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let vm = this;
    app.request.getFoodInfo({
      id: options.id,
      callback (res) {
        vm.setData({ foodInfo: res });
      }
    })
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
      id: '111',
      callback(res) {
        vm.setData({ orderList: res });
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