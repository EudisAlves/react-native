import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import styles from './style';


export default function Paineldeuser() {
  const [selectedCarne, setSelectedCarne] = useState('');

  return (
    <View>
      <Text style={styles.text}>(Preencha as informações abaixo!)</Text>
      <View style={styles.informacion}>
        <View style={styles.inputInfo}>
          <Text style={styles.label}>Informe a quantidade:</Text>
          <TextInput
            style={styles.input}
            placeholder='quantidade!'
          ></TextInput>
        </View>
        <View style={styles.inputInfo}>
          <Text style={styles.label}>Selecione o tipo de carne:</Text>
          <Picker
            style={styles.input}
            selectedValue={selectedCarne}
            onValueChange={(itemValue, itemIndex) => setSelectedCarne(itemValue)}
          >
            <Picker.Item label="Carne bovina" value="bovina" />
            <Picker.Item label="Carne suína" value="suína" />
            <Picker.Item label="Frango" value="frango" />
            <Picker.Item label="Coração" value="coração" />
          </Picker>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Calcular"
          color="#fe5523" // Cor personalizada do botão
        />
      </View>
    </View>
  );
}
