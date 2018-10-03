import React, { Component } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import DeviceInfo from 'react-native-device-info';
import { styles } from './about.styles';

export class About extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Text>ℹ</Text>,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{DeviceInfo.getSystemName()}</Text>
        <Text>{DeviceInfo.getApplicationName()}</Text>
        <Text>{DeviceInfo.getDeviceCountry()}</Text>
      </SafeAreaView>
    );
  }
}
