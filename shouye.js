// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    daoHang:[{title:'背题模式',imageUrl:'/images/guidance.png',lujing:'/pages/product/beitimoshi/beitimoshi'},{title:'顺序练习',imageUrl:'/images/guidance.png',lujing:'/pages/product/lianximoshi/lianximoshi'},{title:'随机练习',imageUrl:'/images/guidance.png',lujing:'/pages/product/lianximoshi/lianximoshi'},{title:'模拟考试',imageUrl:'/images/guidance.png',lujing:'/pages/product/kaoshimoshi/kaoshimoshi'},{title:'错题集',imageUrl:'/images/guidance.png',lujing:'/pages/product/lianximoshi/lianximoshi'},{title:'历年真题',imageUrl:'/images/guidance.png'}]
  },

/**
   * 点击导航跳转页面
   */

   dianjidaohang(e){
     const lujing=e.currentTarget.dataset.dizhiurl
     console.log(lujing)
     wx.navigateTo({
       url: lujing,
     })

   }

  })

 