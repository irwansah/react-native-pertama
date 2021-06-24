import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <View>
        <Text> Siapa Nama Kamu </Text>
        <TextInput
        placeHolde="Ketikan Nama"
        style={{width:200, borderWidth:1}}
        onChangeText={(text) => this.setState({name:text})}
        />
        <Text>Nama Kamu :  {this.state.name}</Text>
      </View>
    );
  }