import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MovieMainScreen from '../screen/MovieMainScreen';
import MovieIntroScreen from '../screen/MovieIntroScreen';

const MovieNavigator = createStackNavigator(
  {
    Categories: {
      screen: MovieMainScreen,
    },
    MovieIntro: MovieIntroScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitle: '옹골찬 영화 연구회',
    },
  }
);

export default createAppContainer(MovieNavigator);
