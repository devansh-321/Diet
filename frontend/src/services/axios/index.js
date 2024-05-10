import axios from 'axios';

const axiosClient = axios.create();
const access_token=localStorage.getItem('token')

axiosClient.defaults.baseURL = 'http://localhost:3011/';
axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':' *',
    'Authorization': `Bearer ${access_token}`
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 90000;

axiosClient.defaults.withCredentials = false;
axiosClient.interceptors.response.use((response)=>{

    return response;
  }, (error)=>{
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('API Error Data',error.response.data);
        console.log('API Error status',error.response.status);
        console.log('API Error header',error.response.headers);

        if(error.response.status==401){
          localStorage.removeItem('token')
          window.location.href='/login'
        }


      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('API Request Error',error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('API Error', error.message);
      }
      console.log('API Error Config ',error.config);
      return Promise.reject(error);
  });

export async function getRequest(URL,urlParam={}) {
    return axiosClient.get(`/${URL}`,
    {
        params:urlParam
    }
    )
}

export async function  postRequest(URL, payload) {
    return await axiosClient.post(`/${URL}`, payload).then(response => response);
}

export async function putRequest(URL, payload) {
    return axiosClient.put(`/${URL}`, payload).then(response => response);
}

export async function deleteRequest(URL,urlParam) {
    return axiosClient.delete(`/${URL}`,{data:urlParam}).then(response => response);
}