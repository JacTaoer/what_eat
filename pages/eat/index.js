
Page({ 
  data: {
    menuList:["汉堡包","日料寿司", "烧腊卤味", "米粉面馆", "包子馄饨", "意面披萨"],
    changeList:[],
    firstLoad:true,
    isLoading:false,
    setInter:null,
    show:false
  },

  startSetInter:function(t){
    let i=this
    let x=i.data.menuList.length
    i.data.setInter=setInterval(function(){        
      if(x==-1){
        x=i.data.menuList.length
        i.setData({
          menu:i.data.menuList[x]
        })
      }
      else{
        i.setData({
          menu:i.data.menuList[x]
        })
      }
      x=x-1    
    },100)
  },

  endSetInter:function(t){
    let i=this
    clearInterval(i.data.setInter)
  }
  ,
 
  //点击开始按钮，开始遍历menuList，再次按下随机抽取menu

  onButton:function(t){
    let i= this
    let isLoading=i.data.isLoading

    i.data.isLoading?(i.setData({
      firstLoad:false,
      isLoading:false
    })):(i.setData({
       isLoading:true
    }))


    if(isLoading==0){
      i.startSetInter()     
    }

     if(isLoading==1){  
      i.endSetInter()
      let num=Math.floor(Math.random()*i.data.menuList.length)
      console.log(i.data.menuList[num])
      i.setData({
        menu:i.data.menuList[num]
      })
     }
              

  },

  onLoad: function (options) {
  },


  onCustmenu() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  //van-button点击提交
  onMenu(){
    this.setData({show:false,menuList:this.data.changeList})

    console.log(this.data.changeList)
  }
  ,

  //van-field发生改变时

  onChange(event) {
  
  // event.detail 为当前输入的值
    
    let arry=event.detail.split(",")
    if(this.contains(event.detail,"，",true)){
      wx.showModal({
        title: '提示',
        content: '不可以输入中文逗号，请英文逗号隔开菜名哦！',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    this.setData({
      changeList:arry
    })
    
  },


  //判断输入菜单中是否有中文逗号

  contains(str, subStr, isIgnoreCase) {
    if (isIgnoreCase) {
      // 忽略大小写
      str = str.toLowerCase();
      subStr = subStr.toLowerCase();
    }
    
    var startChar = subStr.substring(0,1);
    var strLen = subStr.length;
    
    for (var j=0; j<str.length-strLen+1; j++) {
      if (str.charAt(j) == startChar) {
        /* 如果匹配起始字符,开始查找 */
        if (str.substring(j, j+strLen) == subStr) {
          /*如果从j开始的字符与 str 匹配 */
          return true;
        }
      }
    }
    return false;
  }


})