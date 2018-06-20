/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,Button,Alert,
  View, AppRegistry
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Viewer from './Component/Viewer';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  //define setting about hte screen

  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };
  render() {
    const { navigate } = this.props.navigation;


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button onPress={() => navigate('Dashboard')} title="Press Me" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

//Setup Navigation Route
const myscreens = StackNavigator({
  Home: { screen: App },
  Dashboard:{screen:Viewer}


})

AppRegistry.registerComponent('NavigationApp', () => myscreens);