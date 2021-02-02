
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import MovieNavigator from './navigation/MovieNavigator';

export default function App(props) {
  const [fontsLoaded] = useFonts({
    'neodgm': require('./assets/fonts/neodgm.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <MovieNavigator />
      );
  }
}