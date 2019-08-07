import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
  const {method, data} = config
  if(method.toUpperCase() === 'POST' && data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})

axios.interceptors.response.use(response => {
  return response.data
},error => {
  alert('请求异常:'+error.message)
  return new Promise(()=>{})
})

export default axios