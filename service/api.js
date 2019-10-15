import axios from 'axios'
// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://www.mgoi.net/api/v1/';
// axios.defaults.baseURL = 'http://mgoiweb.cn/api/v1/';

//POST传参序列化
// axios.interceptors.request.use((config) => {

// }, (error) => {

// });

// //返回状态判断
// axios.interceptors.response.use((res) => {

// }, (error) => {

// });

function fetchPost(url, params) {
	return new Promise((resolve, reject) => {

		axios.post(url, params)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}

function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: param
        })
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

export default {
    fetchGet,
    fetchPost
}