
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const MovieMainScreen = (props) => {
  return (
    <View style={styles.container}>
    <Text style={styles.textTitle}>옹골찬 영화 리터러시 영화연구회</Text>
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
        />
      </View>
    </View>

    <View style={styles.textView}>
      <Text>SDGs 라이브러리</Text>
    </View>
    <View style={styles.buttonView}>
      <View style={{width: 100}}>
        <Button
          title="소개"
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
    fontFamily: 'neodgm'
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
    fontSize: 20,
    marginTop: 40,
    marginBottom: 20
  },
});

export default MovieMainScreen;



 