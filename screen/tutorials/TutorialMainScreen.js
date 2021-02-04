import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const TutorialMainScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>
      투토리얼 메인
      </Text>
      <Button
          title="step1"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'Step1',
            });
          }}
        />
        <Button
          title="step2"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'Step2',
            });
          }}
        />
        <Button
          title="step3"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'Step3',
            });
          }}
        />
        <Button
          title="step4"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'Step4',
            });
          }}
        />
        <Button
          title="step5"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'Step5',
            });
          }}
        />
        <Button
          title="step6"
          onPress={() => {
            props.navigation.navigate({
              routeName: 'Step6',
            });
          }}
        />
    </View>
  );
};

TutorialMainScreen.navigationOptions = {
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

export default TutorialMainScreen;