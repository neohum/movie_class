import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const TutorialMainScreen = (props) => {
  return (
    <View style={styles.screen}>
      <ScrollView style={{margin: 20}}>
        <View style={{width: "100%"}}>
          <Text style={{fontFamily: "neodgm", fontSize: 20}}>
          투토리얼
          </Text>
        </View>
        <View style={{margin: 20}}>
          <Button
              title="step1"
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'Step1',
                });
              }}
            />
        </View>
        <View style={{margin: 20}}>
          <Button
              title="step2"
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'Step2',
                });
              }}
            />
        </View>  
        <View style={{margin: 20}}>
          <Button
              title="step3"
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'Step3',
                });
              }}
            />
        </View>  
        <View style={{margin: 20}}>
          <Button
              title="step4"
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'Step4',
                });
              }}
            />
        </View>  
        <View style={{margin: 20}}>
          <Button
              title="step5"
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'Step5',
                });
              }}
            />
        </View>  
        <View style={{margin: 20}}>
          <Button
              title="step6"
              onPress={() => {
                props.navigation.navigate({
                  routeName: 'Step6',
                });
              }}
            />
        </View>  
      </ScrollView>
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
    
  }
});

export default TutorialMainScreen;