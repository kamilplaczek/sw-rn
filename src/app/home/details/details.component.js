import React, { Component } from 'react';
import { styles } from './details.styles';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native';

export class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.film.title,
  });

  render() {
    const { film } = this.props.navigation.state.params;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.openingText}>{film.opening}</Text>
      </SafeAreaView>
    );
  }
}
