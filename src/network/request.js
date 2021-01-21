import axios from 'axios';
//极简版
export function request(config){
 const intance1=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000,
        method:'get'
      }) 
      //axios的拦截请求器
      intance1.interceptors.request.use(config=>{console.log(config)
        //这边可以对请求进行拦截有以下几种情况
        //1.请求体不满足网络返回数据情况
        //2.请求时页面空置的时候，显示一个加载图标，这样请求后就直接展示数据
        //3.对用户的身份识别，（登陆时必修携带token，没有直接提醒用户登录，页面直接跳转到登陆页面）
        return config
      },err=>{
        console.log(err);
      });
      //响应拦截
      // intance1.interceptors.response.use(res=>{
      //   console.log(res);
      //   return config
      // },err=>{
      //   console.log(err);
      // });
      return intance1(config);
    }
// //对axios的封装利用promise
// export function request(config){
//   return new Promise((resolve,reject)=>{
//       const intance1=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000,
//         method:'get'
//       })
//       //真正发送请求的网络处
//       intance1(config).then(res=>{
//         // console.log(res);
//         resolve(res)//回调出去
//       }).catch(err=>{
//         // console.log(err);
//         reject(err);
//       })
//     })
//     }

// // post请求
// export function requestPost(config) {
//   const instance = axios.create({
//     timeout: 10000,
//     method: 'post'
//   });

//   // 响应拦截器
//   instance.interceptors.response.use(res => {
//     if (200 <= res.status <= 300 || res.status === 304) {
//       return res.data;
//     }
//   }, err => {
//     return err;
//   })
//   return instance(config);
// }

// // get请求
// export function requestGet(config) {
//   const instance = axios.create({
//     timeout: 10000,
//     method: 'get'
//   });

//   instance.interceptors.response.use(res => {
//     if (200 <= res.status <= 300 || res.status === 304) {
//       return res.data;
//     }
//   }, err => {
//     return err;
//   })
//   return instance(config);
// }
