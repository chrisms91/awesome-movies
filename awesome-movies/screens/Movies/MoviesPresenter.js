import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import styled from 'styled-components';
import MovieSlider from '../../components/MovieSlider';
import { BG_COLOR } from '../../constants/Colors';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';
import generateKey from '../../utilities/generateKey';

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
      {upcoming ? (
        <Section title="Upcoming Movies">
          {upcoming
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                id={movie.id}
                voteAvg={movie.vote_average}
                title={movie.title}
                posterPhoto={movie.poster_path}
                key={generateKey(movie.id)}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array
};

export default MoviesPresenter;
