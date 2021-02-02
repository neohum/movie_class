import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MovieIntroScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>들어가며</Text>
      <Button
        title="Go Back to Main"
        onPress={() => {
          // props.navigation.goBack();
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovieIntroScreen;