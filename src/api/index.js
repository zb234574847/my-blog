import axios from 'axios'
import qs from 'qs'

// http request 拦截器
axios.interceptors.request.use(
    config => {
      if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${store.state.token}`;
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    });
   
  // http response 拦截器
   
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 401: 401 
   
            // 返回 401 清除token信息并跳转到登录页面
            store.commit(types.LOGOUT);
            router.replace({
              path: 'login',
              query: {redirect: router.currentRoute.fullPath}
            })
        }
      }
      return Promise.reject(error.response.data)  // 返回接口返回的错误信息
    });


// 移除请求拦截器
 //axios.interceptors.response.eject(responseInterceptor)

// axios(config)
export default {
    // get 请求
    get(url, params) {
        return axios.get(url, params)
    },
    // post 请求
    post(url, params) {
        let stringifiedParams = qs.stringify(params)
        return axios.post(url, stringifiedParams)
    },
    send(params) {

    }
}
