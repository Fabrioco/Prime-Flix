
// Base da Url: https://api.themoviedb.org/3/
//URL da Api: https://api.themoviedb.org/3/movie/now_playing?api_key=d990f125e042de6239b35dc9f8a09a89&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;