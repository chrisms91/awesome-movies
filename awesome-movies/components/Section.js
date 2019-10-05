import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import generateKey from '../utilities/generateKey';

const Container = styled.View`
  margin-vertical: 20px;
`;

const ScrollView = styled.ScrollView`
  padding-left: 10px;
`;

const Title = styled.Text`
  color: white;
  padding-left: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView horizontal>{children}</ScrollView>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired
};

export default Section;
