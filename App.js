/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistList from './src/ArtistList'
import { getArtist } from './src/ApiClient'

export default class App extends Component<{}> {

  state = {
    artists: []
  }

  componentDidMount() {
    getArtist()
      .then(data => this.setState ({ artists: data }))
  }

  render() {

    const artists = this.state.artists
    
    return (
      <View style={styles.container}>
        <ArtistList artists={artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});
