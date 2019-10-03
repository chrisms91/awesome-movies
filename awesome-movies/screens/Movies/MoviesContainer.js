import React from 'react';
import MoviesPresenter from './MoviesPresenter';
import { MoviesApi } from '../../Api';

export default class MoviesContainer extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowPlaying: null,
    error: null
  };

  async componentDidMount() {
    let upcoming, popular, nowPlaying, error;
    try {
      ({
        data: { results: upcoming }
      } = await MoviesApi.getUpComing());
      ({
        data: { results: popular }
      } = await MoviesApi.getPopular());
      ({
        data: { results: nowPlaying }
      } = await MoviesApi.getNowPlaying());
    } catch (err) {
      error = err;
    } finally {
      this.setState({
        loading: false,
        error,
        upcoming,
        popular,
        nowPlaying
      });
    }
  }

  render() {
    const { loading, upcoming, popular, nowPlaying } = this.state;
    return (
      <MoviesPresenter
        loading={loading}
        upcoming={upcoming}
        popular={popular}
        nowPlaying={nowPlaying}
      />
    );
  }
}
