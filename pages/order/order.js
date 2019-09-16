var app = getApp()
Page({
  data: {
    navbar: ['预定会议室', '录入员工'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})