
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./src/load/Loading"
export default function App() {
  return (
    <View style={styles.container}>
      <Text>test1111</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
