import React, {Component} from 'react';
import{
    Text, View
}from 'react-native';
export default class TinTucComponent extends Component {
    render(){
        return (
            <View style = {{ flex:1,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
<Text style={{fontWeight: 'bold', fontSize : 22, color: 'white'}}
>
    Tin Tức
</Text>
            </View>
        )
    }
}