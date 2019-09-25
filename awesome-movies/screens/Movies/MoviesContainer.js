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
    try {
      const upcoming = await MoviesApi.getUpComing();
      const popular = await MoviesApi.getPopular();
      const nowPlaying = await MoviesApi.getNowPlaying();
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}
