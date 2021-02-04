import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Step2Screen = (props) => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image
          style={styles.cardImage1}
          source={require('../../assets/images/201.png')}
        />
        <Image
          style={styles.cardImage2}
          source={require('../../assets/images/202.png')}
        />
        <Image
          style={styles.cardImage3}
          source={require('../../assets/images/203.png')}
        />
        <Image
          style={styles.cardImage4}
          source={require('../../assets/images/204.png')}
        />
        <Image
          style={styles.cardImage5}
          source={require('../../assets/images/205.png')}
        />
      </ScrollView>

    </View>
  );
};

Step2Screen.navigationOptions = {
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
    height: 530
  },
  cardImage4: {
    margin: 5,
    width: 400,
    height: 560
  },
  cardImage5: {
    margin: 5,
    width: 400,
    height: 520
  }
});

export default Step2Screen;