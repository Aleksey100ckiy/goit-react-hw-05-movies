// import axios from "axios";
// // https://api.themoviedb.org/3/movie/550?api_key=0aea76bf17d3a057de2e549752e53890
// const KEY = '0aea76bf17d3a057de2e549752e53890'

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
// });

const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "0aea76bf17d3a057de2e549752e53890";


export const getTranding = async () => {

   return await fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}&page=1&language=en-US`);
}

export const getFilmById = (films, filmId) => {
  return films.find((film) => film.id === filmId);
};

export const searchMovie = async (serchName) => {
  
  return await fetch(`${BASE_URL}/search/movie?api_key=${KEY}&page=1&language=en-US&query=${serchName}`);
}

export const getMovieById = async (movie_id) =>{

   return  await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${KEY}&language=en-US`);
}

export const getCastMovie = async (movie_id) => {
  
  return await fetch(`${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`)
}

export const getReviewsMovie = async (movie_id) => {
 try {
  return await fetch(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US`)
 } catch (error) {
  console.log(error);
 }
  
}



