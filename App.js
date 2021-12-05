import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
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
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <Text style={styles.titleText}>Binary to decimal calculator</Text>
          <Text style={styles.rubric}>
            Enter a binary number then press Calculate to convert the number to
            decimal.
          </Text>
        </View>

        <View>
          <Input
            onChangeText={handleChangeText}
            placeholder={'e.g. 10101'}
            maxLength={8}
            value={binaryInput}
            keyboardType={'number-pad'}
          />
          <Button title={'Calculate'} onPress={handleCalculate} />
        </View>

        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 25,
  },
  rubric: {
    fontSize: 18,
    lineHeight: 20,
    paddingBottom: 25,
  },
});
