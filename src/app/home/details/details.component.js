import React, { Component } from 'react';
import { styles } from './details.styles';
import { SafeAreaView } from 'react-navigation';
import { Text, Animated } from 'react-native';

export class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.film.title,
  });

  state = {
    position: new Animated.Value(400),
  };

  componentDidMount = () => {
    Animated.timing(this.state.position, {
      toValue: -300,
      duration: 15000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { film } = this.props.navigation.state.params;
    const { position } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Animated.Text
          style={{
            ...styles.openingText,
            transform: [{ perspective: 400 }, { rotateX: '50deg' }, { translateY: position }],
          }}
        >
          {film.opening}
        </Animated.Text>
      </SafeAreaView>
    );
  }
}
