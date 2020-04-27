import React, {Component} from 'react';
import {DetailScreen, ThirdScreen} from '../screenName';
//import TouchableHighlight from 'react-native-TouchableHighlight';
import {Text, View, TouchableHighlight} from 'react-native';
import { StackActions, NavigationActions } from '@react-navigation/stack';
export default class MainComponent extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'blu',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 22, color: 'black', marginBottom: 50}}>
          WellCome To Shop Duoc Pham
        </Text>
        <TouchableHighlight
          style={{
            padding: 10,
            nargin: 20,
            width: 200,
            height: 45,
            borderrsdius: 10,
            backgroundColor: 'darkviolet',
          }}
          style={{fontSize: 18, color: 'white'}}
          onPress={() => {
            
           
            navigation.reset({
              index: 0,
              routes: [{ name: 'second' }],
            });
          //  navigation.dispatch(resetAction);
         //navigation.navigate("second");
          }}>
           <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: 'red',
                width: 280,
                height: 40,
              }}>
              <Text style={{color: 'white',fontSize: 15}}>Đăng nhập</Text>
            </View>
        </TouchableHighlight>
      </View>
    );
  }
}
