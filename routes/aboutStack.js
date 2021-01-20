import React from 'react';
import {Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header'
const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({navigation}) => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
      height: 60
    }}
  >
    <Screen
      name='About'
      component={About}
      options={{headerTitle:()=><Header navigation={navigation} title='About GameZone'/>,
                headerBackground:()=><Image source={require('../assets/game_bg.png')} style={{height:'100%'}}/>
                }}/>
  
  </Navigator>
);

export default AboutStack;