import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const Step3Screen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>
      Step3
      </Text>
    </View>
  );
};

Step3Screen.navigationOptions = {
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

export default Step3Screen;