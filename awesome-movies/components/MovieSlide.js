import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components';
import makePhotoUrl from '../utilities/makePhotoUrl';
import Layout from '../constants/Layout';
import MoviePoster from './MoviePoster';
import { TINT_COLOR, GREY_COLOR } from '../constants/Colors';
import MovieRating from './MovieRating';

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.3;
  position: absolute;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 30px;
`;

const Column = styled.View`
  width: 60%;
  align-items: flex-start;
`;

const OverView = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 14px;
  font-weight: 600;
`;

const VoteContainer = styled.View`
  margin: 10px 0px;
`;

const BtnContainer = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding: 5px;
  border-radius: 2.5px;
`;

const BtnText = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
`;

const MovieSlide = ({
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview,
  navigation,
  isMovie = true
}) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }}></BgImage>
    <Content>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title>{title}</Title>
        {voteAvg ? (
          <VoteContainer>
            <MovieRating votes={voteAvg} inSlide={true} />
          </VoteContainer>
        ) : null}
        {overview ? (
          <OverView>
            {overview.length > 117
              ? `${overview.substring(0, 120)}...`
              : overview}
          </OverView>
        ) : null}
        <BtnContainer
          onPress={() =>
            navigation.navigate({
              routeName: 'Detail',
              params: {
                isMovie,
                id,
                posterPhoto,
                backgroundPhoto,
                title,
                voteAvg,
                overview
              }
            })
          }
        >
          <BtnText>More details</BtnText>
        </BtnContainer>
      </Column>
    </Content>
  </Container>
);

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired
};

export default withNavigation(MovieSlide);
