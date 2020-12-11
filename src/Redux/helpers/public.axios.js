import axios from 'axios';

import config from '../config';

const publicAxios = axios.create({
    baseURL: config.apiUrl
});


export default publicAxios;