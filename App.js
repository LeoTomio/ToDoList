import React, { useState } from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function App() {
  const [nome, setNome] = useState('Fulano')


  function handleMudaNome() {
    alert('Confirmado,Voce é um viadinho')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>

      <TouchableOpacity style={styles.button} onPress={handleMudaNome} >
        <Text style={styles.buttonText}>Mudar Nome </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 28,
  },
  title: {
    fontSize: 32,
    color: '#121212',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})