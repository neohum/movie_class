import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MovieMainScreen from "./MovieMainScreen";

const MovieIntroScreen = (props) => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image
          style={styles.cardImage}
          source={require('../assets/images/intro.png')}
        />
      </ScrollView>
      {/*<Button*/}
      {/*  title="Go Back to Main"*/}
      {/*  onPress={() => {*/}
      {/*    // props.navigation.goBack();*/}
      {/*    props.navigation.popToTop();*/}
      {/*  }}*/}
      {/*/>*/}
    </View>
  );
};

MovieIntroScreen.navigationOptions = {
  headerTitle: 'back',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center'
  },
  cardImage: {
    margin: 5,
    width: 400,
    height: 550
  }
});

export default MovieIntroScreen;