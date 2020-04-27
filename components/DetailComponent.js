import React, {Component} from 'react';
import{
    Text, View
}from 'react-native';

export default class DetailComponent extends Component {
    render(){
        return (
            <View style = {{ flex:1,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
<Text style={{fontWeight: 'bold', fontSize : 22, color: 'white'}}
>
    This is Detail Secree
</Text>
            </View>
        )
    }
}