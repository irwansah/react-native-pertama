/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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

export default StyleComponent;
