import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './navigations/TabNavigation';
import MainNavigation from './navigations/MainNavigation';
import { MoviesApi } from './Api';

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => {
    this.setState({ loaded: true });
  };

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  testFunc = () => {
    MoviesApi.nowPlaying()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      this.testFunc();
      return (
        <>
          <StatusBar barStyle="light-content" />
          <MainNavigation />
        </>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}
