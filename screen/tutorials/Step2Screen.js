import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const Step2Screen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>
      step2
      </Text>
    </View>
  );
};

Step2Screen.navigationOptions = {
  headerTitle: 'back',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center'
  },
  cardImage: {
    width: "98%",
    height: "77%",
  }
});

export default Step2Screen;