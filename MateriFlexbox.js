/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';

class MateriFlexbox extends Component {
  render() {
    return (
    <View>

      <View style={{
        flexDirection:'row',
        backgroundColor:'#999',
        alignItems:'center',
        justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor:'#39d5ff',width:50,height:50}}></View>
        <View style={{backgroundColor:'#29c5ff',width:50,height:50}}></View>
        <View style={{backgroundColor:'#19B5FE',width:50,height:50}}></View>
        <View style={{backgroundColor:'#22A7F0',width:50,height:50}}></View>
      </View>
      
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Image source={{
        uri:'https://yt3.ggpht.com/yti/APfAmoHgoKlNJXneQ8OwWPXnzzmFA-HNOahfDyf0WNhmUg=s88-c-k-c0x00ffffff-no-rj-mo'
      }}
      style={{width:100,height:100,borderRadius:50,marginRight:14,marginTop:20,marginLeft:10}}
      />
      <View>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Irwansah</Text>
      <Text>1juta subscribe</Text>
      </View>
      
      </View>

      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
      }}>
      <Text>Beranda</Text>
      <Text>Video</Text>
      <Text>Playlist</Text>
      <Text>Komunitas</Text>
      <Text>Channel</Text>
      <Text>Tentang</Text>
      </View>

      <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={{flex:1,margin:10,height:150,backgroundColor:'#333'}}></View>
        <View style={{flex:1,margin:10,height:150,backgroundColor:'#ddd'}}></View>
      </View>

    </View>
    )
  }
}

export default MateriFlexbox;
