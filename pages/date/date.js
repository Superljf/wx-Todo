var app = getApp()
Page({
  data: {
    navbar: ['待办', '日程', '概况', '事项'],
    currentTab: 0,
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  // 日历实现
  addtask (e) {
    // 获取当前的年月
    const ym = this.calendar.getCurrentYM();

  },
})