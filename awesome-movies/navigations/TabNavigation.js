import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import MoviesScreen from '../screens/Movies/index';
import TvScreen from '../screens/Tv/index';
import SearchScreen from '../screens/Search/index';
import { BG_COLOR } from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import { createStack } from './Config';

const TabNavigation = createBottomTabNavigator(
  {
    Movies: {
      screen: createStack(MoviesScreen, 'Movies'),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-film' : 'md-film'}
          />
        )
      }
    },
    Tv: {
      screen: createStack(TvScreen, 'Tv'),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-tv' : 'md-tv'}
          />
        )
      }
    },
    Search: {
      screen: createStack(SearchScreen, 'Search'),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'Search',
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
