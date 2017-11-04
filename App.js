/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistBox from './src/ArtistBox';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  render() {

    const artist = {
      image: "https://lastfm-img2.akamaized.net/i/u/770x0/410d3a97677946af9977e88dd2e52681.jpg#410d3a97677946af9977e88dd2e52681",
      name: "Witchfinder General",
      numLike: 20,
      numComments: 30
    }

    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={Array(5).fill(artist)}
          renderItem={(artistList) => <ArtistBox artist={artist} />}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
});
