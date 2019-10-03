import React from 'react';
import { Text } from 'react-native';
import Loader from '../../components/Loader';
import PropTypes from 'prop-types';

const TvPresenter = ({ loading, popular, topRated, airingToday }) =>
  loading ? <Loader /> : <Text>Tv</Text>;

TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default TvPresenter;
