var app = getApp()
Page({
  data: {
    navbar: ['待办', '日程', '概况', '事项'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})