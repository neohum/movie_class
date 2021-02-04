
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const MovieMainScreen = (props) => {
  return (
    <View style={styles.container}>
    <Text style={styles.textTitle}>영화 튜토리얼</Text>
    <View style={{marginBottom: 20}}>
      <Image
        style={styles.cardImage}
        source={require('../assets/images/bg001.png')}
      />
    </View>
    <View style={styles.buttonView}>
      <View style={{width: 100}}>
        <Button
          title="들어가며"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'MovieIntro',
            });
          }}
        />
      </View>

      <View style={{width: 50}}>

      </View>
      <View>
        <Button
          title="학습시작"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'TutorialMain',
            });
          }}
        />
      </View>
    </View>

    <View>
      <Text style={styles.textView}>SDGs 라이브러리</Text>
    </View>
    <View style={styles.buttonView}>
      <View style={{width: 100}}>
        <Button
          title="소개"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'SdgsIntro',
            });
          }}
        />
      </View>
      <View style={{width: 50}}>

      </View>
      <View>
        <Button
          title="라이브러리"
        />
      </View>
    </View>
  </View>

  );
};

MovieMainScreen.navigationOptions = {
  headerTitle: '옹골찬 영화 연구회',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center"
  },
  textTitle: {
    fontSize: 30,
    marginTop: 30,
    alignItems: "center",
    fontFamily: "neodgm"
  },
  cardImage: {
    alignItems: "center",
    width: 120,
    height: 140,
    marginTop: 50,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  textView: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 20,
    fontFamily: "neodgm"
  },
});

export default MovieMainScreen;



 