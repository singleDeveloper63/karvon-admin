import axios from 'axios';
const api = 'http://cdn.umdsoft.uz/api/news/';
const headers = {
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
}

export const blogApi = {
    getNews : () => {
        return axios.get(`${api}all`,{headers})
    },
    addNews : (data) => {
        return axios.post(`${api}add`,data,{ headers })
    },
    deleteNews : (id) => {
        return axios.delete(`${api}${id}`,{ headers })
    }
}