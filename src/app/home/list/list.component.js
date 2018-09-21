import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export class List extends Component {
  state = {
    films: [],
  };

  static navigationOptions = {
    tabBarIcon: () => <Text>🎬</Text>,
  };

  componentDidMount = async () => {
    const filmsResult = await fetch('https://swapi.co/api/films');
    const filmsData = await filmsResult.json();
    this.setState({
      films: filmsData.results.map(film => ({
        releaseDate: film.release_date,
        director: film.director,
        title: film.title,
        opening: film.opening_crawl,
        id: film.episode_id,
      })),
    });
  };

  renderFilm = ({ item }) => (
    <View style={{ padding: 20 }}>
      <Text>{item.title}</Text>
      <Text>{item.director}</Text>
      <Text>{item.releaseDate}</Text>
    </View>
  );

  filmKeyExtractor = item => `${item.id}`;

  render() {
    const { films } = this.state;
    return films.length > 0 ? (
      <View style={{ flex: 1 }}>
        <FlatList style={{ flex: 1 }} keyExtractor={this.filmKeyExtractor} data={films} renderItem={this.renderFilm} />
      </View>
    ) : (
      <ActivityIndicator size="large" style={{ marginTop: '60%' }} />
    );
  }
}
