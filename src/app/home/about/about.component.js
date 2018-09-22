import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export class About extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Text>ℹ</Text>,
  };

  render() {
    return (
      <SafeAreaView>
        <Text>About component!</Text>
      </SafeAreaView>
    );
  }
}
