import React from "react";
import { Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/review";
import Header from '../shared/header';
const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({navigation}) => (
  <Navigator headerMode="screen" 
            initialRouteName="Home" 
            screenOptions={{headerTintColor:'#444',headerStyle:{backgroundColor:'#eee'}}} >
    <Screen name="Home" 
            component={Home} 
            options={{headerTitle:()=><Header navigation={navigation} title='GameZone'/>,
            headerBackground:()=><Image source={require('../assets/game_bg.png')} style={{height:'100%'}}/>
                }}/>
    <Screen name="Details" 
            component={ReviewDetails} 
            options={{title:'Review  Details'}}/>
  </Navigator>
);

export default HomeStack;

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <HomeNavigator />
//   </NavigationContainer>
// );