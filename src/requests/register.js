import axios from 'axios';

export const register = (data, callback) => {
    debugger
    //axios.post(config.baseURL + 'auth/login', data)
    // axios.post('localhost:5000/auth/login', data)
    // .then(res => {
    //     console.log('AAAAA')
    //     callback(res)
    // })
    axios({
        method: 'post',
        url: 'http://localhost:5000/auth/register',
        data: data
    })
    .then(res => {
        console.log('AAAAA')
        callback(res)
    })
}

