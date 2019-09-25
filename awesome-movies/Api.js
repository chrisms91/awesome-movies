import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.themoviedb.org/3/',
  params: {
    api_key: '02438594d909dfa3beb9aeebf5109d02',
    language: 'en-US'
  }
});

export const MoviesApi = {
  getNowPlaying: () => api.get('movie/now_playing'),
  getUpComing: () => api.get('movie/upcoming'),
  getPopular: () => api.get('movie/popular'),
  getMovie: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  searchMovies: term =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const TvApi = {
  getTopRated: () => api.get('tv/top_rated'),
  getPopular: () => api.get('tv/popular'),
  getAiringToday: () => api.get('tv/airing_today'),
  getTv: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  searchTv: term =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
