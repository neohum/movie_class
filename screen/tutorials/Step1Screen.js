import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Step1Screen = (props) => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image
          style={styles.cardImage1}
          source={require('../../assets/images/101.png')}
        />
        <Image
          style={styles.cardImage2}
          source={require('../../assets/images/102.png')}
        />
        <Image
          style={styles.cardImage3}
          source={require('../../assets/images/103.png')}
        />
        <Image
          style={styles.cardImage4}
          source={require('../../assets/images/104.png')}
        />
      </ScrollView>

    </View>
  );
};

Step1Screen.navigationOptions = {
  headerTitle: 'back',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  cardImage1: {
    margin: 5,
    width: 400,
    height: 500
  },
  cardImage2: {
    margin: 5,
    width: 400,
    height: 570
  },
  cardImage3: {
    margin: 5,
    width: 400,
    height: 500
  },
  cardImage4: {
    margin: 5,
    width: 400,
    height: 500
  }
});

export default Step1Screen;