import React from 'react';
import { Text } from 'react-native';
import Loader from '../../components/Loader';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BG_COLOR } from '../../constants/Colors';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TvPresenter = ({ loading, popular, airingThisWeek, airingToday }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday ? (
        <Section title="Airing Today">
          {airingToday
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                id={tv.id}
                key={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
                isMovie={false}
              />
            ))}
        </Section>
      ) : null}

      {airingThisWeek ? (
        <Section title="Airing This Week">
          {airingThisWeek
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                id={tv.id}
                key={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
                isMovie={false}
              />
            ))}
        </Section>
      ) : null}

      {popular ? (
        <Section title="Popular" horizontal={false}>
          {popular
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                id={tv.id}
                key={tv.id}
                horizontal={true}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
                overview={tv.overview}
                isMovie={false}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  airingThisWeek: PropTypes.array,
  airingToday: PropTypes.array
};

export default TvPresenter;
