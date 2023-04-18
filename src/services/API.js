// import axios from "axios";
// // https://api.themoviedb.org/3/movie/550?api_key=0aea76bf17d3a057de2e549752e53890
// const KEY = '0aea76bf17d3a057de2e549752e53890'

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
// });


const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "0aea76bf17d3a057de2e549752e53890";


export const getFilm = () => {

   return fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}&page=1&language=en-US`);
}

