import React from 'react';
import TvPresenter from './TvPresenter';

export default class TvContainer extends React.Component {
  state = {
    loading: true
  };

  render() {
    const { loading } = this.state;
    return <TvPresenter loading={loading} />;
  }
}
