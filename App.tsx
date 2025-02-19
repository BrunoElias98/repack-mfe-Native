import React from 'react';
import {Text, View, Button, StyleSheet, DeviceEventEmitter} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useStore} from './store';

interface CartProps {
  onCountChange?: (newCount: number) => void;
}

const App = ({onCountChange}: CartProps) => {
  const {count, increment} = useStore();

  const handleIncrement = () => {
    increment();
    onCountChange?.(count + 1);
  };

  const handleSaveToStorage = async () => {
    try {
      await AsyncStorage.setItem(
        '@shared_storage',
        JSON.stringify({message: 'Valor salvo pela Cart2 (parcel)!'}),
      );

      DeviceEventEmitter.emit('storage_updated');
    } catch (error) {
      console.error('Erro ao salvar:', error);
    }
  };

  const handleClearStorage = async () => {
    try {
      await AsyncStorage.removeItem('@shared_storage');
      DeviceEventEmitter.emit('storage_updated');
    } catch (error) {
      console.error('Erro ao limpar storage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Parcel Native App</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Salvar no Storage" onPress={handleSaveToStorage} />
      <Button title="Limpar Storage" onPress={handleClearStorage} />
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
