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
  const [binaryInput, setBinaryInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('Enter 0 or 1 only!');
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="error" size={24} color="red" />
          <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>
            {errorMessage}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={{ padding: 16, backgroundColor: 'coral', borderRadius: 8 }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>CALCULATE</Text>
      </TouchableOpacity>

      <Text>RESULT: {result}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
