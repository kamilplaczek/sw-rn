import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { styles } from './list.styles';
import { ListElement } from './list-element/list-element.component';
import { screens } from '../../app.navigation';
import { SafeAreaView } from 'react-navigation';

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
    <ListElement onPress={() => this.props.navigation.navigate(screens.DETAILS, { film: item })} film={item} />
  );

  renderHeader = () => <Text style={styles.listHeader}>Star Wars Movies:</Text>;

  filmKeyExtractor = item => `${item.id}`;

  render() {
    const { films } = this.state;
    return films.length > 0 ? (
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          style={styles.list}
          keyExtractor={this.filmKeyExtractor}
          data={films}
          renderItem={this.renderFilm}
        />
      </SafeAreaView>
    ) : (
      <ActivityIndicator size="large" style={{ marginTop: '60%' }} />
    );
  }
}
