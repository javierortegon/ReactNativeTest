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

export default class App extends Component<{}> {

  render() {

    const artist = {
      image: "https://lastfm-img2.akamaized.net/i/u/770x0/410d3a97677946af9977e88dd2e52681.jpg#410d3a97677946af9977e88dd2e52681",
      name: "Witchfinder General",
      numLike: 20,
      numComments: 30
    }

    const artists = Array(3).fill(artist)
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
