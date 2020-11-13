import axios from 'axios';

const api = 'http://cdn.umdsoft.uz/api/auth/';

export const authApi = {
    login : data => {
        return axios.post(`${api}login`,data)
    }
}