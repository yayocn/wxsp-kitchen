//index.js
//获取应用实例
const app = getApp()

let flag = true;

Page({
  data: {
    motto: '食者众而耕者寡也',
    userInfo: {},
    kitchenUserInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad: function () {
    let vm = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          kitchenUserInfo: app.globalData.kitchenUserInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    if (app.globalData.kitchenUserInfo) {
      this.setData({
        kitchenUserInfo: app.globalData.kitchenUserInfo
      })
    } else {
      app.request.getKitchenUserInfo({
        openId: app.globalData.openId,
        callback (data) {
          vm.setData({
            kitchenUserInfo: data
          })
        }
      });
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goKitchen (e) {
    wx.navigateTo({
      url: '/pages/kitchen/kitchen'
    })
  },
  goOrderList (e) {
    wx.navigateTo({
      url: '/pages/orderList/orderList'
    })
  }
})
