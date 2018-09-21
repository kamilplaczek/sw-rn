import React, { Component } from 'react';
import { Text } from 'react-native';

export class List extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Text>🎬</Text>,
  };

  render() {
    return <Text>List component!</Text>;
  }
}
