import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Input } from 'react-native-elements';
import { binaryToDecimal } from './util/binaryToDecimal';

const regex = /^[0-1]$/;

export default function App() {
  const [binaryInput, setBinaryInput] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState(false);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Input
          onChangeText={(text) => {
            setBinaryInput(text);
          }}
          placeholder={'Enter a binary number'}
          maxLength={8}
          value={binaryInput}
          keyboardType={'number-pad'}
          errorMessage={error && 'Input can only be 0 or 1'}
        />
        <Button
          disabled={!binaryInput || !regex.test(binaryInput)}
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
