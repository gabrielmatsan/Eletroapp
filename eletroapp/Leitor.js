import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const DigitChecker = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const data = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '', value: '4' },
  { label: '', value: '5' },
  { label: '', value: '6' },
  { label: '', value: '7' },
  { label: '', value: '8' },
  { label: '', value: '9' },
];

  const checkDigits = () => {
    // Check if the input is not empty
    if (inputText.length === 0) {
      setResult('Please enter a string');
      return;
    }

    // Check each character in the string
    for (let i = 0; i < inputText.length; i++) {
      const currentChar = inputText[i];

      // Check if the current character is a digit
      if (!isNaN(parseInt(currentChar))) {
        setResult(`${currentChar} is a digit.`);
      } else {
        setResult(`${currentChar} is not a digit.`);
      }
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Valor de resistor (Ω):"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />

      <Button title="Check Digits" onPress={checkDigits} />

      <Text style={{ marginTop: 20 }}>{result}</Text>
    </View>
  );
};

export default DigitChecker;
