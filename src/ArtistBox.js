/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


export default class ArtistBox extends Component<{}> {

  render() {

    const { image, name, numLike, numComments} = this.props.artist

    return (
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="ios-heart-outline" size={30} color="gray" />
                <Text style={styles.count}>{numLike}</Text>
              </View> 
              <View style={styles.iconContainer}> 
                <Icon name="ios-text-outline" size={30} color="gray" />
                <Text style={styles.count}>{numComments}</Text>
              </View>  
            </View>  
          </View> 
        </View> 
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  },
  artistBox: {
    backgroundColor : '#FFF',
    flexDirection: 'row',
    elevation: 4,
    margin: 5,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2
    },
  },
  info: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    paddingTop: 10,
    color: '#000'
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  iconContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  count: {
    color: 'gray'
  }
});
