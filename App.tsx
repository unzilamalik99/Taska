import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './Components/AppNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
