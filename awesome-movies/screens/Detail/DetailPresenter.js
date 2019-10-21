import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';
import { BG_COLOR, TINT_COLOR } from '../../constants/Colors';
import Layout from '../../constants/Layout';
import makePhotoUrl from '../../utilities/makePhotoUrl';
import MoviePoster from '../../components/MoviePoster';
import MovieRating from '../../components/MovieRating';
import Loader from '../../components/Loader';

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
  padding-top: 20px;
`;

const Header = styled.View`
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3.5};
  opacity: 0.3;
  position: absolute;
  top: 0;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding-horizontal: 20px;
  height: ${Layout.height / 3.5};
  width: 80%;
`;

const Column = styled.View`
  margin-left: 30px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  width: 80%;
`;

const MainContent = styled.View`
  padding-horizontal: 20px;
  margin-top: 25px;
`;

const ContentTitle = styled.Text`
  color: ${TINT_COLOR};
  font-weight: 600;
  margin-bottom: 10px;
`;

const ContentValue = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
  width: 80%;
`;

const DataContainer = styled.View`
  margin-bottom: 10px;
`;

const Genres = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-top: 10px;
`;

const DetailPresenter = ({
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview,
  loading,
  status,
  date,
  isMovie,
  genres
}) => (
  <Container>
    <Header>
      <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }}></BgImage>
      <LinearGradient
        colors={['transparent', 'black']}
        start={Platform.select({
          ios: [0, 0]
        })}
        end={Platform.select({
          ios: [0, 0.5],
          android: [0, 0.9]
        })}
      >
        <Content>
          <MoviePoster path={posterPhoto} />
          <Column>
            <Title>{title}</Title>
            <MovieRating inSlide={true} votes={voteAvg} />
            {genres ? (
              <Genres>
                {genres.map((genre, index) =>
                  index === genres.length - 1 ? genre.name : `${genre.name} / `
                )}
              </Genres>
            ) : null}
          </Column>
        </Content>
      </LinearGradient>
      <MainContent>
        {overview ? (
          <>
            <DataContainer>
              <ContentTitle>Overview</ContentTitle>
              <ContentValue>{overview}</ContentValue>
            </DataContainer>
          </>
        ) : null}
        {status ? (
          <>
            <DataContainer>
              <ContentTitle>Status</ContentTitle>
              <ContentValue>{status}</ContentValue>
            </DataContainer>
          </>
        ) : null}
        {date ? (
          <>
            <DataContainer>
              <ContentTitle>
                {isMovie ? 'Release Date' : 'First Episode'}
              </ContentTitle>
              <ContentValue>{date}</ContentValue>
            </DataContainer>
          </>
        ) : null}
        {loading ? <Loader /> : null}
      </MainContent>
    </Header>
  </Container>
);

DetailPresenter.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number,
  overview: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  isMovie: PropTypes.bool.isRequired,
  status: PropTypes.string,
  date: PropTypes.string,
  genres: PropTypes.array
};

export default DetailPresenter;
