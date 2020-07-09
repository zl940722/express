import axios from 'axios'
let baseUrl = 'https://douban.uieee.com';

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3000';
} else {
    // baseUrl = 'http://localhost:3000';
}
// export const baseUrl = 'http://localhost:3000';
let $axios = axios.create({
    baseURL: baseUrl + '/v2/movie',
    timeout: 10000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
});