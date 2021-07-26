import React from 'react';
import {View, ScrollView} from 'react-native';
import Product from './Product';
import StyleComponent from './StyleComponent';
import SampleComponent from './SampleComponent';
import MateriFlexbox from './MateriFlexbox';

const App = () => {
  return (
    <View>
      <ScrollView>
        <MateriFlexbox />
      </ScrollView>
    </View>
  );
};

export default App;
