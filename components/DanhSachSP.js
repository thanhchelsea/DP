import React, {Component} from 'react';
import Icon1 from 'react-native-ionicons';
import {Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class DanhSachSP extends Component {

  constructorh(props){
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            backgroundColor: '#00ff99',
            width: '100%',
            flex: 1 / 10,
            alignItems:'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View style={{marginLeft:20,marginTop:6,marginBottom:6,flex: 10 / 10,borderRadius:5,borderWidth:1,flexDirection:'row', backgroundColor: 'white',alignItems:'center',justifyContent:'flex-start'}}>
            <TextInput placeholder="tìm kiếm tên sản phẩm, shop..." style={{marginLeft:10,height:40,flex:9/10,borderColor:'black',borderRadius:10}} />
            <Icon1 name="search"  size={23} />
          </View>

          <View style={{marginRight:4}}>
          <Icon1  name="cart-outline" color='#ffff66'  size={40} />
          </View>

        </View>
        <View
          style={{
            flex: 8 / 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>

        </View>
      </View>
    );
  }
}
