import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Step5Screen = (props) => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image
          style={styles.cardImage1}
          source={require('../../assets/images/501.png')}
        />
        <Image
          style={styles.cardImage2}
          source={require('../../assets/images/502.png')}
        />
        <Image
          style={styles.cardImage3}
          source={require('../../assets/images/503.png')}
        />
      </ScrollView>

    </View>
  );
};

Step5Screen.navigationOptions = {
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
    height: 530
  },
  cardImage2: {
    margin: 5,
    width: 400,
    height: 570
  },
  cardImage3: {
    margin: 5,
    width: 400,
    height: 530
  },
});

export default Step5Screen;