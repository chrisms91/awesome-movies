import React from 'react';
import SearchPresenter from './SearchPresenter';
import { MoviesApi, TvApi } from '../../Api';

export default class extends React.Component {
  state = {
    loading: false,
    tvResults: null,
    movieResults: null,
    searchTerm: '',
    error: null
  };

  handleSearchUpdate = text => {
    this.setState({
      searchTerm: text
    });
  };

  onSubmitEditing = async () => {
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      let loading, movieResults, tvResults, error;
      this.setState({
        loading: true
      });

      try {
        ({
          data: { results: movieResults }
        } = await MoviesApi.searchMovies(searchTerm));
        ({
          data: { results: tvResults }
        } = await TvApi.searchTv(searchTerm));
      } catch (err) {
        error = "Can't Search";
      } finally {
        this.setState({
          loading: false,
          movieResults,
          tvResults,
          error
        });
      }
      return;
    }
  };

  render() {
    const { loading, tvResults, movieResults, searchTerm } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        handleSearchUpdate={this.handleSearchUpdate}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}
