
Page({ 
  data: {
    menuList:["鱼香肉丝", "土豆里脊", "干锅花菜", "手撕包菜", "农家小炒肉", "肉末茄子"],
    firstLoad:true,
    isLoading:false,
    load:0,
    menu:""
  },

 
  onButton:function(t){
    let i= this
    let isLoading=i.data.isLoading
    let num=0

    let timer=setInterval(function(){
      console.log("111")
    },500)

    i.data.isLoading?(i.setData({
      firstLoad:false,
      isLoading:false
    })):(i.setData({
       isLoading:true
    }))
      console.log("firstLoad:",i.data.firstLoad)
      console.log("isLoading:",i.data.isLoading)

  

     if(isLoading==1){
     
      let num=Math.floor(Math.random()*i.data.menuList.length)
      console.log(i.data.menuList[num])
      i.setData({
        menu:i.data.menuList[num]
      })
     }
     
     
    
    //开始不停滚动赋值给menu

  },

  onLoad: function (options) {
  
  }

})