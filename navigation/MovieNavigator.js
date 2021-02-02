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
      headerTitle: 'A Screen',
    },
  }
);

export default createAppContainer(MovieNavigator);
