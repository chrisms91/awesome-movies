import React from 'react';
import { Text } from 'react-native';
import DetailPresenter from './DetailPresenter';
import { MoviesApi, TvApi } from '../../Api';

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    };
  };

  constructor(props) {
    super(props);

    const {
      navigation: {
        state: {
          params: {
            isMovie,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview
          }
        }
      }
    } = props;

    this.state = {
      isMovie,
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overview,
      loading: true
    };
  }

  async componentDidMount() {
    const { isMovie, id } = this.state;
    let err, genres, overview, status, date, backgroundPhoto;
    try {
      if (isMovie) {
        ({
          data: {
            genres,
            overview,
            status,
            release_date: date,
            backdrop_path: backgroundPhoto
          }
        } = await MoviesApi.getMovie(id));
      } else {
        ({
          data: {
            genres,
            overview,
            status,
            first_air_date: date,
            backdrop_path: backgroundPhoto
          }
        } = await TvApi.getTv(id));
      }
    } catch (err) {
    } finally {
      this.setState({
        loading: false,
        genres,
        overview,
        status,
        date,
        backgroundPhoto
      });
    }
  }

  render() {
    const {
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overview,
      loading,
      date,
      status,
      isMovie,
      genres
    } = this.state;

    return (
      <DetailPresenter
        id={id}
        posterPhoto={posterPhoto}
        backgroundPhoto={backgroundPhoto}
        title={title}
        voteAvg={voteAvg}
        overview={overview}
        loading={loading}
        status={status}
        date={date}
        isMovie={isMovie}
        genres={genres}
      />
    );
  }
}
