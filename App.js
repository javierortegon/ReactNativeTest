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
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  render() {

    const image= "https://lastfm-img2.akamaized.net/i/u/770x0/410d3a97677946af9977e88dd2e52681.jpg#410d3a97677946af9977e88dd2e52681";
    const name= "Witchfinder General"

    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text> 
            <Icon name="rocket" size={30} color="#900" />
          </View> 
        </View>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150
  },
  artistBox: {
    backgroundColor : '#FFF',
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  name: {
    fontSize: 20,
    paddingTop: 10
  }
});
