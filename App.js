/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Text, TextInput, View, StyleSheet} from 'react-native';
import macbook from './image/macbook.png';
const App = () => {
  return <StyleComponent />;
};
const StyleComponent = () => {
  return (
    <View>
      <Text style={styles.text}>StyleComponent</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#ed5b8e',
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 10,
        }}>
        <Image
          source={require('./image/macbook.png')}
          style={{width: 188, height: 107, borderRadius: 10}}
        />
        <Text
          style={{
            fontSize: 14,
            color: '#222',
            fontWeight: 'bold',
            marginTop: 16,
          }}>
          New Macbook 2021
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f2994a',
            marginTop: 12,
          }}>
          Rp. 25.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            color: '#222',
            marginTop: 12,
          }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
});
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
export default App;
