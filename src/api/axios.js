import axios from 'axios';

export default axios.create({
    baseURL: 'http://172.22:3070/'
});