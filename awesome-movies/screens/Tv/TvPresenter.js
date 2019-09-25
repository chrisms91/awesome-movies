import React from 'react';
import { Text } from 'react-native';
import Loader from '../../components/Loader';
import PropTypes from 'prop-types';

const TvPresenter = ({ loading }) => (loading ? <Loader /> : <Text>Tv</Text>);
TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default TvPresenter;
