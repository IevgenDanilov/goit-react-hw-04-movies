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

// export const getPosts = (_page = 1, _limit = 3) => {
//   return instance.get("/", createParams({ _limit, _page }));
// };

// export const searchPosts = (searchText) => {
//   return instance.get(
//     "/",
//     createParams({
//       q: searchText,
//     })
//   );
// };

// export const getPostById = (id) => {
//   return instance.get(`/${id}`);
// };
