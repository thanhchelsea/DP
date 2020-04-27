import React, {Component} from 'react';
import{
    Text, View,  Image,TouchableHighlight, StyleSheet,Dimensions, Alert,FlatList
}from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-ionicons';
//import Icon1 from 'react-native-Ionicons';


import { Card } from 'react-native-elements';
export default class CaNhanComponent extends Component {
  constructor(props){
    super(props);
    this.state = { 
      x:null ,
      ds: [
        {name: 'Thông tin khách hàng', image: 'man-outline',mau:'#009966'},
        {name: 'quản lý đơn hàng', image: 'documents-outline',mau:'#4F8EF7'},
        {name: 'Sản phẩm đã mua', image: 'cart-outline',mau:'#FF3333'}, 
        {name: 'Giới thiệu', image: 'trail-sign-outline',mau:'#CC6600'},
        {name: 'Chính sách', image: 'document-text-outline',mau:'#808080'},
        {name: 'Cài đặt', image: 'settings-outline',mau:'blue'},
        {name: 'Hỗ trợ', image: 'call-outline',mau:'green'},
        {name: 'Đăng xuất', image: 'log-in-outline',mau:'black'},
    ],
    
    
  }}
  componentDidMount(){
    let x1=Dimensions.get('window').width;
    this.setState({
      x:x1,
    })
   
  }
  click(index1){
    if(index1.index==0){
      this.props.navigation.goBack();
            return true;
     }
     if(index1.index==1){
      this.props.navigation.navigate('Home');
     }
     if(index1.index==2){
      this.props.navigation.navigate('Home');
     }
     if(index1.index==3){
      this.props.navigation.navigate('Home');
     }
     if(index1.index==4){
      this.props.navigation.navigate('Home');
     }
     if(index1.index==5){
      this.props.navigation.navigate('next');
     }
     if(index1.index==6){
      this.props.navigation.navigate('Home');
     }
   if(index1.index==7){
    this.props.navigation.navigate('Home');
   }
  }
    render(){
        return (
          
            <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
        
            <Card height={100} flex={2/10} width={this.state.x}>
              <Image
                style={{width: 60, height: 60, marginTop: 10}}
                source={require('../Image/logo.png')}
              />
              <Text style={{marginTop: -60, marginLeft: 90}}>  Chào mừng bạn đến với shop</Text>
              </Card>

             <FlatList style={{flex:2/10,marginTop:30,}}
             data ={this.state.ds}
             renderItem={({item,index})=>{
               return(
                <TouchableHighlight
                underlayColor='#008080'
                
                onPress={()=>{this.click({index})}}
                >
                  <View style={{flex:1,flexDirection:'row',width:this.state.x,borderColor:'black',borderWidth:0.2}}>
                     <View style={{flexDirection:'row',alignItems:'center',width:this.state.x-50,height:45,}}>
                  
                   <Icon1 style={{marginLeft:10}} name={item.image} color={item.mau} size={27} />
                 
                 <Text style={{marginLeft:10}}>{item.name}</Text>
               
              
                 </View>
                 
                      <View style={{marginLeft:20,justifyContent:'center',alignItems:'center'}}>
                      <Icon1  name='chevron-forward-outline' color={item.mau} size={27} />
                  </View>
                  
                  </View>

                  </TouchableHighlight>
               );
             }}
             />

            </View>
 
        );
        
      }
}