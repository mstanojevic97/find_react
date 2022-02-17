import axios from 'axios';
import config from '../config';

export const login = (data, callback) => {
    debugger
    //axios.post(config.baseURL + 'auth/login', data)
    // axios.post('localhost:5000/auth/login', data)
    // .then(res => {
    //     console.log('AAAAA')
    //     callback(res)
    // })
    axios({
        method: 'post',
        url: 'http://localhost:5000/auth/login',
        data: data
    })
    .then(res => {
        console.log('AAAAA')
        callback(res)
    })
}

