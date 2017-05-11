const _baseUrl = 'http://musicapi.duapp.com/api.php'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic/'
// 发送请求时，重复使用的url可在这里统一修改
// 在需要使用的组件里 import api from '..'  api.getUrl(url)
export default {
  getUrl(promise){
    if(promise){
      return _baseUrl+'?'+promise
    }else {
      return _baseUrl
    }
  },
  getSong (id) {
    return _baseUrl + '?type=url&id=' + id
  }
}
