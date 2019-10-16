var jsonData = require("../../data/news.js")
Page({
  data: {
      leader: {
        leadername: ''
      }
  },
  onLoad: function () {
    this.setData({
      datalist: jsonData.datalist
    });
    var self = this;
    wx.getStorage({
      key: 'leadername',
      success: function (res) {
        self.setData({
          leadername: res.data
        })
      }
    })
  },
  formSubmit(e) {
    const value = e.detail.value;
    if (value.leadername != '') {
      wx.setStorage({
        key: 'leadername',
        data: value,
        success() {
          wx.navigateBack();
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请输入需要添加的上级',
        showCancel: false
      })
    }
  }
})