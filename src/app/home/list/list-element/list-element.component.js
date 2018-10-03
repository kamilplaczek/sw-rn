import React, { Component } from 'react';
import { styles } from './list-element.styles';
import { Text, TouchableHighlight, View } from 'react-native';

export class ListElement extends Component {
  render() {
    const { film, onPress } = this.props;

    return (
      <TouchableHighlight testID="listElement" underlayColor="transparent" onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🎞</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{film.title}</Text>
            <Text>{film.director}</Text>
            <Text>{film.releaseDate}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
