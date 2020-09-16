import axios from "axios"
export function request(config) {
    const axiosInstance = axios.create({
        baseURL:"http://152.136.185.210:8000/api/z8",
        timeout:5000
    })
    // 拦截器
    axiosInstance.interceptors.request.use(config => {
        // 成功请求
        return config
    },err => {
        // 请求失败
        console.log("请求失败,错误原因" + err)
    })
    axiosInstance.interceptors.response.use(config => {
        // 响应成功
        return config
    },err => {
        // 响应失败
        console.log("响应失败，错误原因" + err)
    })
    return axiosInstance(config)
}