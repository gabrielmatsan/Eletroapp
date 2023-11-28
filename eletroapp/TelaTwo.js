import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';

export default function TelaTwo() {
  const [inputText, setInputText] = useState('');
  const [viewsComCores, setViewsComCores] = useState([]);

  const getCorPorNumero = (numero) => {
    const cores = ['black', '#411900', 'red', '#FF6600', 'yellow', 'green', 'blue', '#7F00FF', 'grey', 'white'];
    return cores[numero % 10];
  };

  const atualizarViewsComCores = () => {
    const novasViews = [];

    // Garante que há pelo menos três dígitos na entrada
    if (inputText.length >= 3) {
      // Obtém os dois primeiros dígitos
      const tresPrimeirosDigitos = inputText.slice(0, 2);

      // Converte a quantidade total de algarismos menos três em um número
      const restoComoNumero = parseInt(inputText.length - 2, 10);

      // Obtém a cor com base nos três primeiros dígitos
      const corPrimeiraView = getCorPorNumero(parseInt(tresPrimeirosDigitos[0], 10));
      const corSegundaView = getCorPorNumero(parseInt(tresPrimeirosDigitos[1], 10));
      const corTerceiraView = getCorPorNumero(parseInt(restoComoNumero));

      // Adiciona as três Views com as cores correspondentes
      novasViews.push(
        <View key={0} style={{ backgroundColor: corPrimeiraView, width: 50, height: 50, margin: 5, borderWidth:2 }} />
      );
      novasViews.push(
        <View key={1} style={{ backgroundColor: corSegundaView, width: 50, height: 50, margin: 5, borderWidth:2 }} />
      );
      novasViews.push(
        <View key={2} style={{ backgroundColor: corTerceiraView, width: 50, height: 50, margin: 5, borderWidth:2 }} />
      );
    } else {
      const tresPrimeirosDigitos = inputText.slice(0, 2);

      // Converte a quantidade total de algarismos menos três em um número
      const restoComoNumero = parseInt(inputText.length - 2, 10);

      // Obtém a cor com base nos três primeiros dígitos
      const corPrimeiraView = getCorPorNumero(parseInt(tresPrimeirosDigitos[0], 10));
      const corSegundaView = getCorPorNumero(parseInt(tresPrimeirosDigitos[1], 10));
      const corTerceiraView = getCorPorNumero(restoComoNumero);

      // Adiciona as três Views com as cores correspondentes
      novasViews.push(
        <View key={0} style={{ backgroundColor: corPrimeiraView, width: 50, height: 50, margin: 5, borderWidth:2 }} />
      );
      novasViews.push(
        <View key={1} style={{ backgroundColor: corSegundaView, width: 50, height: 50, margin: 5, borderWidth:2 }} />
      );
      novasViews.push(
        <View key={2} style={{ backgroundColor: corTerceiraView, width: 50, height: 50, margin: 5, borderWidth:2 }} />
      );
    }

    setViewsComCores(novasViews);
    Keyboard.dismiss()
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do resistor:"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
        keyboardType="numeric"
        maxLength={11}
      />
      <Button title="Atualizar Cores" onPress={atualizarViewsComCores} />
      <View style={styles.viewsContainer}>{viewsComCores}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor:"#FFFBF2"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  viewsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

