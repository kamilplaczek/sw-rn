import React, { Component } from 'react';
import { AppStack } from './app.navigation';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppStack />
      </SafeAreaView>
    );
  }
}
