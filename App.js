import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

export default function App() {
  const [binaryInput, setBinaryInput] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [result, setResult] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Enter a binary number'}
        maxLength={8}
        textAlign={'right'}
        value={binaryInput}
        onChangeText={(text) => {
          setBinaryInput(text);
        }}
      />

      {errorMessage && (
        <View style={styles.errorMessageContainer}>
          <MaterialIcons name="error" size={24} color={'#FF0000'} />
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>CALCULATE</Text>
      </TouchableOpacity>

      <Text>RESULT: {result}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4C2C2',
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
