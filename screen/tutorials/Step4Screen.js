import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const Step4Screen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>
      step4
      </Text>
    </View>
  );
};

Step4Screen.navigationOptions = {
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

export default Step4Screen;