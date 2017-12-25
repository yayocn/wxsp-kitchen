//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    wx.setStorageSync('foods', [
      { 'id': 'food-000001', 'name': '回锅肉', 'imgUrl': 'http://img3.imgtn.bdimg.com/it/u=876799413,3023526702&fm=27&gp=0.jpg' },
      { 'id': 'food-000002', 'name': '蒜薹炒肉', 'imgUrl': 'http://img4.imgtn.bdimg.com/it/u=1726172795,279360365&fm=200&gp=0.jpg' },
      { 'id': 'food-000002', 'name': '土豆丝', 'imgUrl': 'http://img2.imgtn.bdimg.com/it/u=2100948825,3834398967&fm=11&gp=0.jpg' },
      { 'id': 'food-000003', 'name': '藕片', 'imgUrl': 'http://img4.imgtn.bdimg.com/it/u=1388693028,2038394116&fm=27&gp=0.jpg' },
      { 'id': 'food-000004', 'name': '清蒸鱼', 'imgUrl': 'http://img3.imgtn.bdimg.com/it/u=4127140484,1827845669&fm=27&gp=0.jpg' },
      { 'id': 'food-000005', 'name': '炖排骨', 'imgUrl': 'http://img4.imgtn.bdimg.com/it/u=898854617,3598969995&fm=27&gp=0.jpg' },
      { 'id': 'food-000006', 'name': '烧牛肉', 'imgUrl': 'http://img1.imgtn.bdimg.com/it/u=2101099225,2394145066&fm=200&gp=0.jpg' },
      { 'id': 'food-000007', 'name': '狼牙土豆', 'imgUrl': 'http://img2.imgtn.bdimg.com/it/u=3836923942,4132371950&fm=27&gp=0.jpg' },
      { 'id': 'food-000008', 'name': '凉拌黄瓜', 'imgUrl': 'http://img2.imgtn.bdimg.com/it/u=3293415850,3144586682&fm=27&gp=0.jpg' },
      { 'id': 'food-000009', 'name': '鸡蛋仔', 'imgUrl': 'http://img2.imgtn.bdimg.com/it/u=3647053653,4083283773&fm=27&gp=0.jpg' },
      { 'id': 'food-000010', 'name': '蒸蛋', 'imgUrl': 'http://img1.imgtn.bdimg.com/it/u=843316550,4196301975&fm=27&gp=0.jpg' },
      { 'id': 'food-000011', 'name': '牛奶饼干', 'imgUrl': 'http://img3.imgtn.bdimg.com/it/u=3222193250,863123359&fm=200&gp=0.jpg' }
    ])

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
    }
  }
})