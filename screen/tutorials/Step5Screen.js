import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const Step5Screen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>
      step5
      </Text>
    </View>
  );
};

Step5Screen.navigationOptions = {
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

export default Step5Screen;