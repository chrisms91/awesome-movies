import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '02438594d909dfa3beb9aeebf5109d02',
    language: 'en-US'
  }
});

export const MoviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upComing: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular')
};

export const TvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today')
};
