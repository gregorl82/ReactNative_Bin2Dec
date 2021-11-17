import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Input } from 'react-native-elements';
import { binaryToDecimal } from './util/binaryToDecimal';

export default function App() {
  const [binaryInput, setBinaryInput] = useState();
  const [result, setResult] = useState();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Input
          placeholder={'Enter a binary number'}
          maxLength={8}
          value={binaryInput}
          onChangeText={(text) => {
            setBinaryInput(text);
          }}
        />
        <Button
          disabled={!binaryInput}
          title={'Calculate'}
          onPress={() => {
            const result = binaryToDecimal(binaryInput);
            setResult(result);
          }}
        />

        {result && (
          <View>
            <Text>Result: {result}</Text>
            <Button
              title={'Reset'}
              onPress={() => {
                setResult();
                setBinaryInput();
              }}
            />
          </View>
        )}

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
