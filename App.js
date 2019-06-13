/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import NavigationStack from "./src/navigation";

const { persistor, store } = configureStore();


export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <NavigationStack />
        </PersistGate>
      </Provider>
    );
  }
}