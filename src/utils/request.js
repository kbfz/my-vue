import axios from 'axios'
import store from '@/store'
import { config } from 'vue/types/umd'


const service = axios.create({
    baseURL:'/', // 请求的地址
    timeout:60000 // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(
    config = {

    },
    error =>{

    }
)
// 相应拦截
service.interceptors.response.use(
    response =>{

    },
    error =>{

    }
)

export default service