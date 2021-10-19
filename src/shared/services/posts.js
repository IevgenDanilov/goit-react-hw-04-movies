import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const key = "92328ae8dd5bcee1597a295c993c895b";

// const createParams = (params) => {
//   return {
//     params,
//   };
// };

export const getTrendingMovies = () => {
  return instance.get(`/trending/movie/day?api_key=${key}`);
};

export const getSingleMovie = (movie_id) => {
  return instance.get(`/movie/${movie_id}?api_key=${key}&language=en-US`);
};

export const getCastMovie = (movie_id) => {
  return instance.get(
    `/movie/${movie_id}/credits?api_key=${key}&language=en-US`
  );
};

export const getReviewsMovie = (movie_id) => {
  return instance.get(
    `/movie/${movie_id}/reviews?api_key=${key}&language=en-US`
  );
};
