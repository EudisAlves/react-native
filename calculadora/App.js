import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [meatType, setMeatType] = useState('');
  const [result, setResult] = useState('');

  const calculateIngredients = () => {
    let salt = 10 * parseInt(weight);
    let garlic = 10 * parseInt(weight);
    let paprika = 10 * parseInt(weight);
    let lemon = parseInt(weight);
    let oil = 10 * parseInt(weight);
    let bayLeaf = 10 * parseInt(weight);

    setResult(
      `Para ${weight}kg de ${meatType} você precisa de:\n\n${salt}g de sal\n${garlic}g de alho\n${paprika}g de colorau\n${lemon} limão\n${oil}g de óleo\n${bayLeaf}g de louro`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcul-Temp</Text>

      <View style={styles.entrada}>
        <Text style={styles.text}>Peso da carne (em kg):</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setWeight(text)}
          value={weight}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.entrada}>
        <Text style={styles.text}>Tipo de carne:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setMeatType(text)}
          value={meatType}
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={calculateIngredients}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginTop: 60,
    marginBottom: 20,
    color: '#fff',
    padding: 15,
  },
  entrada: {
    flexDirection: 'row',
    backgroundColor: '#051',
    padding: 15,
  },
  text: {
    color: '#fff',
  },
  input: {
    width: 90,
    height: 25,
    backgroundColor: '#333',
    color: '#fff',
    marginLeft: 20,
  },
  result: {
    backgroundColor: '#666',
    height: 290,
    color: '#fff',
    margin: 20,
    padding: 9,
  },
  buttonContainer: {
    width: 190,
    marginTop: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: '#fff',
  },
});

export default Calculator;
