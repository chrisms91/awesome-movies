import React from 'react';
import TvPresenter from './TvPresenter';
import { TvApi } from '../../Api';

export default class TvContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, topRated, airingToday, error;
    try {
      ({
        data: { results: popular }
      } = await TvApi.getPopular());
      ({
        data: { results: topRated }
      } = await TvApi.getTopRated());
      ({
        data: { results: airingToday }
      } = await TvApi.getAiringToday());
    } catch (err) {
      error = err;
    } finally {
      this.setState({
        loading: false,
        error,
        popular,
        topRated,
        airingToday
      });
    }
  }

  render() {
    const { loading, popular, topRated, airingToday } = this.state;
    return (
      <TvPresenter
        loading={loading}
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
      />
    );
  }
}
