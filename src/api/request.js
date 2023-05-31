//二次封装axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
const NETWORK_ERROR = '网络请求异常，请稍后重试.....lgg'
    //创建一个axios实例对象
const request = axios.create({
        baseURL: 'http://lab.inhust.top:55502', //接口基地址
        timeout: 10000, //超时则返回402
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json;chartset=utf-8',
        },
        isToken: true, // 默认true表示接口调用需要请求头加token，false表示不需要token即可调用

    })
    //请求前
    //使用Axios拦截器为所有的请求自动设置 Authorization header
request.interceptors.request.use(
        //自定义header
        //token认证用到header
        config => {
            config.headers['token'] = `${localStorage.getItem('token')}`;
            return config;
        },

    )
    //请求后
request.interceptors.response.use((res) => {
        //console.log(res);
        const { code, data, msg } = res.data
        if (code === 20000) {
            return data
        } else {
            //网络请求错误
            ElMessage.error(msg || NETWORK_ERROR)
            return Promise.reject(msg || NETWORK_ERROR)
        }
    })
    //封装的核心函数
    /* function request(options) {
        options.method = options.method || 'get'
        if (options.method.toLowerCase() == 'get') {
            options.params = options.data
        }
        return service(options)
    } */

export default request