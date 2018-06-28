import axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'http://localhost:3002'
});

export default instanceAxios;