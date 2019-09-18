var jsonData = require("../../data/news.js")
Page({
  data: {

  },
  onLoad: function () {
    this.setData({
      datalist: jsonData.datalist 
    });
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  // 添加上级
  hideModal(e) {
    this.setData({
      modalName: null
    })

  },
  getUserInfo: function (e) {
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        showLogin: !this.data.showLogin,
        userInfo: e.detail.userInfo
      });
    } else {
      wx.switchTab({
        url: '../index/index'
      })
    }
  },
  ChooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      checkbox: items
    })
  },
  // 显示员工资料信息
  showinfo() {
    wx.navigateTo({
      url: '../../common/info/info',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  // 添加上下级
  addleader() {
    
  }
})

