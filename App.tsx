import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

import {useStore} from './store';

interface CartProps {
  onCountChange?: (newCount: number) => void;
  externalCount?: number;
}

const App = ({onCountChange}: CartProps) => {
  const {count, increment} = useStore();

  const handleIncrement = () => {
    increment();
    onCountChange?.(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Parcel Native App</Text>
      <Button title="Increment" onPress={handleIncrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
