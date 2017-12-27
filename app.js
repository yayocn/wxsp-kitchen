//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    let orderList = wx.getStorageSync('orderList');
    wx.setStorageSync('orderList', orderList || []);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let self = this;
        let appId = 'wxd6a1ad51140d5134';
        let appSecret = '9e1afbd7ae62f4891f8cacafa42d9582';

        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          method: 'GET',
          data: {
            appId: appId,
            secret: appSecret,
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          success: function (data) {
            self.globalData.openId = data.data.openid;
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    openId: '',
    host: 'http://localhost:8888',
  },
  request: {
    getFoodMenu (option) {
      const app = getApp();
      wx.request({
        url: `${ app.globalData.host }/menu`,
        method: "GET",
        success: function (result) {
          const data = result.data;
          option.callback(data);
        }
      })
    },
    getFoodInfo (option) {
      const app = getApp();
      wx.request({
        url: `${ app.globalData.host }/food/${ option.id }`,
        success: function (result) {
          const data = result.data;
          option.callback(data);
        }
      })
    },
    getOrderList (option) {
      const app = getApp();
      wx.request({
        url: `${ app.globalData.host }/order/${ option.id }`,
        success: function (result) {
          const data = result.data;
          option.callback(data);
        }
      })
    },
    deleteOrderList(option) {
      const app = getApp();
      wx.request({
        url: `${app.globalData.host}/order/${option.id}`,
        method: "DELETE",
        success: function (result) {
          const data = result.data;
          option.callback(data);
        }
      })
    },
    submitOrder(option) {
      const app = getApp();
      wx.request({
        url: `${app.globalData.host}/order/update`,
        method: "POST",
        data: {
          openId: option.openId,
          orderList: orderList
        },
        success: function (result) {
          const data = result.data;
          option.callback(data);
        }
      })
    }
  }
})