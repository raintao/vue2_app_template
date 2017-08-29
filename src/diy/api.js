import router from '../router'
import { Indicator } from 'mint-ui'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
import md5 from 'js-md5';
// 发送请求时，重复使用的url可在这里统一修改
// 在需要使用的组件里 import api from '..'  api.getUrl(url)
export default {
  /** ajax封装参数是个对象
    {
      type:'GET',  默认GET
      url:'/api/getUsreMSg',
      data:{id:1,number:2},  //userid token 不用传 本地以封装
      dataType:'json', //默认json
      callBack:function(){}, //状态码200的回调函数
      complete:function(){}, //状态码200,401除外的回调函数
    }
  **/
  toastDiv(msg) {
    Toast({
      message: msg,
      position: 'middle',
      duration: 2000
    });
  },
  request(obj) {
    var access_token = localStorage.getItem('access_token')
    var user_id = localStorage.getItem('uid')
    if(!obj.type) { obj.type = "GET" }
    if(!obj.dataType) { obj.dataType = "json" }
    if(!obj.data) { obj.data = {} }
    if(!obj.complete) { obj.complete = function(){} }
    if(!obj.urlKey){
      if(!access_token) {
        MessageBox.alert('登录过期，请重新登录！').then(action => {
          localStorage.setItem('access_token', '');
          router.push('/login')
        })
        return
      } else {
        obj.data.access_token = access_token
        obj.data.partner_id =user_id
      }
    }

    var arrs = [];

    $.each(obj.data, function(i,e) {
      var str = i + e;
      arrs.push(str)
    });

    arrs.sort();
    var sortStr = "";
    for(var i=0;i<arrs.length;i++){
      sortStr += arrs[i];
    }

    arrs = md5(sortStr);
    obj.data.secret_str = arrs;
    $.ajax({
      type: obj.type,
      url: baseUrl + obj.url,
      data: obj.data,
      dataType: obj.dataType,
      beforeSend: function() {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
      },
      success: function(data) {
        if((typeof data) === 'string') {
          data = JSON.parse(data)
        }
        Indicator.close()
        if(data.status == 1000) {

          return obj.callBack(data)
        } else if(data.status == 1001) {
           MessageBox.alert('登录过期，请重新登录！').then(action => {
            localStorage.setItem('access_token', '');
            router.push('/login')
           })
        } else {
          MessageBox.alert(data.message).then(action => {
            return obj.complete(data)
          });
        }
      },
      error: function() {
        Indicator.close()
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
  },
  setTitle(text) {  //适配微信 iphone
    var $body = $('body');
    document.title = text;
    // hack在微信等webview中无法修改document.title的情况
    var $iframe = $('<iframe style="display:none;" src="./static/images/logo.ico"></iframe>').on('load', function() {
      setTimeout(function() {
        $iframe.off('load').remove();
      }, 0);
    }).appendTo($body);
  },
  getFormatDate(date){
    var date=new Date(date), seperator1 = "-";
    var year = date.getFullYear(), month = date.getMonth() + 1, strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
   return  year + seperator1 + month + seperator1 + strDate;
  }
}
