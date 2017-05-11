import axios from 'axios'
axios.defaults.timeout = 5000

// code状态码200判断（自定义拦截器）
axios.interceptors.response.use((res) => {
  // 百度云请求超时检测 （axios状态码）
  if (res.status === 654) {
    window.alert('请求超时！')
  }
  // 自定义的状态码
  // if (res.data.code !== 200) {
  //   window.alert('数据返回有误')
  //   return Promise.reject(res)
  // }
  return res
}, (error) => {
  console.log('promise error:' + error)
  return Promise.reject(error)
})
export default axios
