import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

function TelaInicial(){
  return(
  <View style={styles.container}>
    <View style={styles.texto}>
      <Text style={{fontSize: 20, fontFamily: 'monospace',}}>
        Bem vindo ao EletroApp!
      </Text>
    </View>

    <View>
      <View style={styles.texto}>
          <Text style={{fontFamily: 'monospace', fontSize: 15,}}>
            Se você precisa descobrir o valor do resistor, vá para a aba "Cores" ⚡
          </Text>
          <Text style={{fontFamily: 'monospace', fontSize: 15,}}>
           {"\n"}Lá você deve fornecer as cores do resistor, após isso mostrarei o valor em Ω (ohms).
         </Text>
      </View>
      <View style={styles.texto}>
          <Text style={{fontFamily: 'monospace', fontSize: 15,}}>
            Se você precisa descobrir as cores do resistor, vá para a aba "Valor"🔢
          </Text>
          <Text style={{fontFamily: 'monospace', fontSize: 15,}}>
           {"\n"}Lá você deve fornecer o valor em Ω (ohms) do resistor, após isso mostrarei as cores em ordem.
          </Text>
      </View>
    </View>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor:"#FFFBF2",
  },
  texto:{
    margin: 20,
    marginTop:15,
    marginBottom: 50,
    padding:20,
    alignText: 'center',

    borderRadius:5,
    backgroundColor:'#2880D6',
  }
})

export default TelaInicial;