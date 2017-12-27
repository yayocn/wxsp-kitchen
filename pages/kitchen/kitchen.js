// pages/kitchen/kitchen.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgMode: 'aspectFill',
    foodMenu: {},
    order: {
      orderList: [],
      // orderObj 是给orderList做的补充，用于将已选菜品的添加按钮设置为不可用
      orderObj: {},
      listClass: '',
      selectedList: []
    }
  },
  goFoodDetails (e) {
    let foodId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/foodDetail/foodDetail?id=${foodId}`,
    })
  },
  addMenu(e) {
    let item = e.target.dataset.item;
    let orderList = wx.getStorageSync('orderList');
    for(let i = 0; i < orderList.length; i++) {
      if (orderList[i]._id === item._id) {
        return ;
      }
    }

    let food = {
      pic: item.pic,
      name: item.name,
      _id: item._id
    };
    orderList.push(food);
    this.updateOrderList(orderList);
  },
  updateOrderList: function (list) {
    wx.removeStorageSync('orderList')
    wx.setStorageSync('orderList', list);
    this.setData({ ['order.orderList']: list });
    
    let orderObj = {};
    list.forEach(function (food) {
      orderObj[food._id] = food;
    });
  
    this.setData({ ['order.orderObj']: orderObj });
  },
  toggleOrderListDialog (e) {
    let vm = this;
    let listClass = vm.data.order.listClass === '' ? 'show' : '';
    vm.setData({ ['order.listClass']: listClass });
  },
  checkboxChange: function (e) {
    let vm = this;
    let id = e.target.dataset.id;
    let value = e.detail.value[0];
    let selectedList = vm.data.order.selectedList;
    if (value == undefined) {
      selectedList.splice(vm.data.order.selectedList.indexOf(id), 1);
    } else {
      selectedList.push(id);
    }
    vm.setData({ ['order.selectedList']: selectedList });
  },
  deleteOrder: function (e) {
    let vm = this;
    console.log('//TO DO', '删除选中菜单');
    vm.setData({ ['order.selectedList']: [] });

    app.request.deleteOrderList({
      id: '111',
      callback(res) {
        vm.setData({ ['order.orderList']: res });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let vm = this;
    app.request.getFoodMenu({
      callback (res) {
        vm.setData({ 'foodMenu': res });
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
    let vm = this;
    // app.request.getOrderList({
    //   id: '111',
    //   callback (res) {
    //     vm.setData({ ['order.orderList']: res });
    //   }
    // });
    vm.updateOrderList(wx.getStorageSync('orderList'));
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