/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#1abc9c'}} />
      <Text>Irwan</Text>
      <Irwan />
      <Text>Sahrul</Text>
      <Text>Sidik</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <Boxgreen />
      <Profile />
    </View>
  );
};

const Irwan = () => {
  return <Text>Halo Irwan</Text>;
};
const Photo = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/100/100/tech'}}
      style={{height: 100, width: 100}}
    />
  );
};

class Boxgreen extends Component {
  render() {
    return <Text>Ini Class Component</Text>;
  }
}
class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'http://placeimg.com/100/100/animals'}}
        />
        <Text style={{color: '#3498db', fontSize: 24}}>Alt Image</Text>
      </View>
    );
  }
}

export default SampleComponent;
