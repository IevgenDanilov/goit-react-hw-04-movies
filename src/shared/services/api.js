import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "92328ae8dd5bcee1597a295c993c895b",
};

export const getTrendingMovies = () => {
  return axios.get(`/trending/movie/day`);
};

export const getSingleMovie = (movie_id) => {
  return axios.get(`/movie/${movie_id}?language=en-US`);
};

export const getSearchedMovies = (query) => {
  return axios.get(
    `/search/movie?language=en-US&query=${query}&page=1&include_adult=false`
  );
};

export const getCastMovie = (movie_id) => {
  return axios.get(`/movie/${movie_id}/credits?language=en-US`);
};

export const getReviewsMovie = (movie_id) => {
  return axios.get(`/movie/${movie_id}/reviews?language=en-US&page=1`);
};
