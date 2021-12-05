import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Input } from 'react-native-elements';
import { binaryToDecimal } from './util/binaryToDecimal';

export default function App() {
  const [binaryInput, setBinaryInput] = useState('');

  const handleChangeText = (text) => {
    setBinaryInput(text);
  };

  const handleCalculate = () => {
    const result = binaryToDecimal(binaryInput).toString();
    Alert.alert('Result', `${binaryInput} = ${result}`, [
      {
        text: 'OK',
        onPress: () => {
          setBinaryInput('');
        },
      },
    ]);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Input
          onChangeText={handleChangeText}
          placeholder={'Enter a binary number'}
          maxLength={8}
          value={binaryInput}
          keyboardType={'number-pad'}
        />
        <Button title={'Calculate'} onPress={handleCalculate} />

        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessageText: {
    color: '#FF0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonStyle: {
    padding: 16,
    backgroundColor: '#FF7F50',
    borderRadius: 8,
  },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold' },
});
