import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MoviesScreen from '../screens/Movies';
import TvScreen from '../screens/Tv';
import SearchScreen from '../screens/Search';
import { BG_COLOR } from '../constants/Colors';

const TabNavigation = createBottomTabNavigator(
  {
    Movies: MoviesScreen,
    Tv: TvScreen,
    Search: SearchScreen
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
