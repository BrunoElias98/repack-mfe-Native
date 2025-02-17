import React from 'react';
import {Text, View, Button} from 'react-native';
import { useStore } from './store';

const App = () => {
  const {increment} = useStore();

  return (
    <View>
      <Text>Parcel Native App</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

export default App;
