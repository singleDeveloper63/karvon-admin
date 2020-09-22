import axios from 'axios';

const api = 'http://umdsoft.uz/api/category/';
const headers = {
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
}

export const categoryApi = {
    getCategory : () => {
        axios.interceptors.request.use = conf => {
            console.log(conf);
            return conf;
        }
        return axios.get(api)
    },
    addCategory : data => {
        return axios.post(api,data,{
            headers
        })
    }
}