Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [
      { 'id': 'food-000001', 'name': '回锅肉', 'imgUrl': 'http://img3.imgtn.bdimg.com/it/u=876799413,3023526702&fm=27&gp=0.jpg' },
      { 'id': 'food-000002', 'name': '蒜薹炒肉', 'imgUrl': 'http://img4.imgtn.bdimg.com/it/u=1726172795,279360365&fm=200&gp=0.jpg' },
      { 'id': 'food-000002', 'name': '土豆丝', 'imgUrl': 'http://img2.imgtn.bdimg.com/it/u=2100948825,3834398967&fm=11&gp=0.jpg' },
      { 'id': 'food-000003', 'name': '藕片', 'imgUrl': 'http://img4.imgtn.bdimg.com/it/u=1388693028,2038394116&fm=27&gp=0.jpg' }
    ]
  },
  goBack (e) {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })

    try{
      let foods = wx.getStorageSync('foods');
      for (let i in foods) {
        if (foods[i].id === this.data.id) {
          this.setData({
            foodInfo: {
              id: foods[i].id,
              name: foods[i].name,
              imgUrl: foods[i].imgUrl,
              time: 10,
              cost: 10,
              materials: [
                {
                  name: '鸡蛋',
                  weight: '2',
                  unit: '个'
                },
                {
                  name: '鸡蛋仔粉',
                  weight: '100',
                  unit: '克'
                },
              ]
            }
          })
          return;
        }
      }
    } catch (e) {

    }
  
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