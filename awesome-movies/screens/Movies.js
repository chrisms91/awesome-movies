import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default ({ navigation }) => (
  <>
    <Text>Movies</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <Text>Go to detailllllll</Text>
    </TouchableOpacity>
  </>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
