Page({
  data: {
    name: '',
    password: '',
  },
  // 获取输入账号
  name: function (e) {
    this.setData({
      account: e.detail.value
    })
  },
  password: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  login: function (forName) {
    var that = this;
    var username = this.data.name;
    var pwd = this.data.password;
    if (username === '' && pwd === '') {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'loading',
        duration: 2000
      });
    } else {
      wx.switchTab({
        url: '/pages/date/date'
      })

    }
  },
  handleError: function (errorMsg) {
    wx.showToast({
      title: errorMsg,
      icon: 'warn',
      duration: 2000
    })
  },
  reset: function (forName) {
    this.$refs[forName].resetFields();
  }
})