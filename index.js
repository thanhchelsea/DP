/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TabNavigatior, TabBarBottom } from '@react-navigation/stack';
//import {StackNavigator} from '@react-navigation/native';
//import App from './App';
import {name as appName} from './app.json';
// Components
import MainComponent from './components/MainComonents';
import DetailComponent from './components/DetailComponent';
import TinTucComponent from './components/TinTucComponent';
import DanhSachSP from './components/DanhSachSP'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-ionicons';
//screen name
import { MainScreen,DetailScreen } from './screenName';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//Icons
import Iconicons from 'react-native-vector-icons/Ionicons';
import CaNhanComponent from './components/CaNhanComponent';
//import Icon from 'react-native-vector-icons/Ionicons';
//const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

console.disableYellowBox = true ; 

function abc(){
  return(
    <View>
      <Text>puiusu</Text>
    </View>
  );
}
function Detail() {
  return (
    <Tab.Navigator
       tabBarOptions={{
      
            keyboardHidesTabBar :true,
            showLabel: false, // an title tab
            activeTintColor: 'black',
            inactiveTintColor: 'black',
          }}>
      <Tab.Screen 
       options={{
        tabBarIcon: ({color}) => {
          return (
            <View>
               <Icon1  name='newspaper-outline' color={color} size={23} />
            </View>
          );
        },

      
      }}
       name="Tin Tức" component={Tintuc} />
      <Tab.Screen
       options={{
        tabBarIcon: ({color}) => {
          return (
            <View>
             <Icon1 name="basket-outline" color={color} size={23} />
            </View>
          );
        },

      
      }}
       name="Danh Mục" component={DanhSach} />
      <Tab.Screen
       options={{
        tabBarIcon: ({color}) => {
          return (
            <View>
             <Icon1 name="people-circle-outline" color={color}  size={23} />
            </View>
          );
        },

      
      }}
       name="Cá Nhân" component={CaNhan} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function Home({navigation}){
  return(
     
     <MainComponent navigation={navigation}/>
     
  );
}
function Tintuc({navigation}){
  return(
     
     <TinTucComponent navigation={navigation}/>
     
  );
}
function DanhSach({navigation}){
  return(
     
     <DanhSachSP navigation={navigation}/>
     
  );
}

function CaNhan({navigation}){
  return(
     
     <CaNhanComponent navigation={navigation}/>
     
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="next" component={abc} />
        <Stack.Screen options={{
          headerShown:false,
        }
        } name="second" component={Detail} />
      </Stack.Navigator>
      
    
   

    </NavigationContainer>
  );
}
AppRegistry.registerComponent(appName, () => App) ;