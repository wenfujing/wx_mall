//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎登录wxapp',
    username:'',
    userPassword:'',
    id_token:'',//方便存放本地的locakStorage
    reponse:'',//存放返回数据

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  userNameInput:function(e){
    this.setData({
      username:e.detail.value
    })
  },
  userPasswordInput:function(e){
    this.setData({
      userPassword:e.detail.value
    })
    console.log(e.detail.value)
  },
  login:function(){
    var that = this
    wx.request({
      url: 'http://localhost:8000/admin',
      data:{
        username:this.data.username,
        password:this.date.userPassword,
      },
      method:'GET',
      success:function(res){
        that.setData({
          id_token:res.data.id_token,
          reponse:res
        })
        try{
          wx.setStorageSync(id_token, res.data
          .id_token)
        }catch(e){
          
        }
        wx.navigateTo({
          url: '../components/welcome/welcome',
        })
        console.log(res.data);
      },
      fail:function(res){
        console.log(res.data);
        console.log("is failed")
      }
    })
  }

})
