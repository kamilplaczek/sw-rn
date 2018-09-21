import React, { Component } from 'react';
import { Text } from 'react-native';

export class About extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Text>ℹ</Text>,
  };

  render() {
    return <Text>About component!</Text>;
  }
}
