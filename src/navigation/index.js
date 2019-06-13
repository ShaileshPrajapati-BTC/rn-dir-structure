import React from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import SplashScreen from "../screens/splash/index";
import HomeScreen from '../screens/home/index'


const HomeStack = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
}, {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: { backgroundColor: '#E73536' },
      title: 'You are not logged in',
      headerTintColor: 'white'
    }
  });

const navigator = createSwitchNavigator({
  SplashStack: SplashScreen,
  HomeStack: HomeStack
},
  {
    headerMode: 'none',
    initialRouteName: 'SplashStack',
    navigationOptions: {
      headerVisible: true,
    },
    cardStyle: {
      backgroundColor: "#ffffff"
    }
  });

export default createAppContainer(navigator);