import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Selecionador from './Selecionador';

function TelaOne() {
  const [color1, setColor1] = useState(null);
  const [color2, setColor2] = useState(null);
  const [color3, setColor3] = useState(null);
  const [result, setResult] = useState(null);

  const handleColor1Selected = (value) => {
    setColor1(value * 100);
  };

  const handleColor2Selected = (value) => {
    setColor2(value * 10);
  };

  const handleColor3Selected = (value) => {
    const colorMultipliers = {
      '0': null,   // Preto
      '1': 1,   // Marrom
      '2': 10,   // Vermelho
      '3': 100, // Laranja
      '4': 1000,   // Amarelo
      '5': 10000,   // Verde
      '6': 100000,   // Azul
      '7': 1000000,   // Violeta
      '8': 10000000,   // Cinza
      '9': 100000000,   // Branco
    };

    const multiplier = colorMultipliers[value];
    setColor3(multiplier);
  };

  const handleButtonClick = () => {
    if (color3 === null) {
      const totalResult = color1 + color2;
      setResult((totalResult / 10) + "Ω");
    } else { 
      const totalResult = (color1 + color2) * color3;
      setResult(totalResult + "Ω");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cor 1:</Text>
      <Selecionador onColorSelected={handleColor1Selected} style={{width: 1000,}}/>
      
      <Text style={styles.label}>Cor 2:</Text>
      <Selecionador onColorSelected={handleColor2Selected} />

      <Text style={styles.label}>Cor 3:</Text>
      <Selecionador onColorSelected={handleColor3Selected} />

      <Button title="Submit" onPress={handleButtonClick} />

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.label}>Resultado:</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor:"#FFFBF2",
     },
  label: { 
    padding: 5,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 16, 
    fontWeight: 'bold',
    marginTop: 20,
    
    borderRadius:5,
    borderWidth:2,
    borderColor: '#2880D6',
    },
  resultContainer: { 
    marginTop: 20
     },
  resultText: { 
    fontSize: 18,
    fontWeight: 'bold',
   },
});

export default TelaOne;