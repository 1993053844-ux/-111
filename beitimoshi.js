// pages/product/beitimoshi/beitimoshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuanxiangTyle:'多选',
    timuArray:[],//题目数组
    timuIndex:0
  },

   /**
   * 获取后台数据
   */

   timuList(){
     wx.request({
       method:"POST",
       url:'http://localhost/shuai1/public/index.php/wechat/shuati/tikulist',
       data:'',
       success:res=>{
           console.log(res.data)
           this.setData({
             timuArray:res.data
           })
       }
     })
   },

   /**
   * 题目切换
   */
   // 上一题
   shangyiti(){
     this.setData({
       timuIndex:this.data.timuIndex -1
     })
   },
   // 下一题
   xiayiti(){
     this.setData({
       timuIndex:this.data.timuIndex +1
     }) 
   },
  
  onLoad(options) {
    this.timuList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})