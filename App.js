import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Input } from 'react-native-elements';
import { binaryToDecimal } from './util/binaryToDecimal';

export default function App() {
  const [binaryInput, setBinaryInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleChangeText = (text) => {
    setBinaryInput(text);
  };

  const handleCalculate = () => {
    Keyboard.dismiss();
    const result = binaryToDecimal(binaryInput).toString();
    const resultString = `${binaryInput} = ${result}`;
    Alert.alert('Result', resultString, [
      {
        text: 'OK',
        onPress: () => {
          setHistory([...history, resultString]);
          setBinaryInput('');
        },
      },
    ]);
  };

  const handleReset = () => {
    setHistory([]);
  };

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <Text style={styles.titleText}>Binary to decimal calculator</Text>
          <Text style={styles.rubricText}>
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
          <Button
            buttonStyle={styles.calculateButton}
            title={'Calculate'}
            onPress={handleCalculate}
            type={'solid'}
          />
          <Button
            buttonStyle={styles.resetButton}
            title={'Reset'}
            onPress={handleReset}
            type={'outline'}
          />
        </View>

        {history.length > 0 && (
          <View>
            <Text style={styles.historyText}>Calculation history</Text>
            {history.map((item, index) => (
              <Text key={item}>
                {index + 1}: {item}
              </Text>
            ))}
          </View>
        )}

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
  rubricText: {
    fontSize: 18,
    lineHeight: 20,
    paddingBottom: 25,
  },
  historyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  calculateButton: { margin: 5, backgroundColor: 'rebeccapurple' },
  resetButton: { margin: 5 },
});
