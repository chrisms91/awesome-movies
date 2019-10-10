import React from 'react';
import TvPresenter from './TvPresenter';
import { TvApi } from '../../Api';

export default class TvContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    airingThisWeek: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, airingThisWeek, airingToday, error;
    try {
      ({
        data: { results: popular }
      } = await TvApi.getPopular());
      ({
        data: { results: airingThisWeek }
      } = await TvApi.getAiringThisWeek());
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
        airingThisWeek,
        airingToday
      });
    }
  }

  render() {
    const { loading, popular, airingThisWeek, airingToday } = this.state;
    return (
      <TvPresenter
        loading={loading}
        popular={popular}
        airingThisWeek={airingThisWeek}
        airingToday={airingToday}
      />
    );
  }
}
