/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Provider } from 'react-redux'
import { Navigation } from 'react-native-navigation'

import PushScreen from './screens/push'

import configureStore from './store'

export const navigatorStyle = {
  navBarBackgroundColor: 'white',
  navBarTextColor: 'black',
  statusBarTextColorScheme: 'light',
  drawUnderNavBar: false
}

const store = configureStore()

function registerScreens (store, Provider) {
  Navigation.registerComponent('PUSH', () => PushScreen, store, Provider)
}

registerScreens(store, Provider)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'PUSH',
    title: 'Screen',
    overrideBackPress: true    
  }
});
