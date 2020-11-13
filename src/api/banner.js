import axios from 'axios';

const headers = {
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
}
const api = 'http://cdn.umdsoft.uz/api/slider/';

export const Banner = {
    add : (data) => (axios.post(`${api}add`,data,{headers})),
    getAll : () => (axios.get(`${api}all`, { headers })),
    change : (data,id) =>(axios.put(`${api}${id}`,data ,{headers})),
    delete : (id) => (axios.delete(`${api}${id}`,{headers}))
}
