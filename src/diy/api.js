import router from  '../router'
const baseUrl = 'http://musicapi.duapp.com/api.php'
// 发送请求时，重复使用的url可在这里统一修改
// 在需要使用的组件里 import api from '..'  api.getUrl(url)
export default {
  request(type,url,params,callBack,complete){
    var access_token=localStorage.getItem('token')
    if(!access_token){
      MessageBox.confirm('登录过期，请重新登录！').then(action => {
        router.push('/login')
      })
    }else {
      params.access_toke=access_toke
    }
    $.ajax({
      type:type,
      url:baseUrl+url,
      data:params,
      dataType:'json',
      beforeSend:function(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
      },
      success:function(data){
        if((typeof data)==='string'){
          data=JSON.parse(data)
        }
        Indicator.close()
        if(data.status==200){
          return callBack(data)
        }else if(data.status==401){
          MessageBox.confirm('登录过期，请重新登录！').then(action => {
            router.push('/login')
          })
        }else{
          MessageBox.alert(data.message).then(action => {
            return complete(data)
          });
        }
      },
      error:function(){
        MessageBox.alert('网络请求错误！')
      }

    })
  },
  initPlus(callBack){
    if (window.plus) {
			callBack()
		} else {
			document.addEventListener('plusready',function(){
				callBack()
			}, false);
		}
  },
  setStorage(k,v){
    localStorage.setItem(k,JSON.stringfy(v))
  },
  getStorage(k){
    return JSON.parse(localStorage.getItem(k))
  }
}
