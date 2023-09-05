import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './ProductListStyles'

const AddItemForm = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [value, setValue] = useState('');

  const handleAddItem = () => {
    const newItem = {
      name: name,
      quantity: parseFloat(quantity),
      value: parseFloat(value),
    };
    onAddItem(newItem);
    setName('');
    setQuantity('');
    setValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Adicionar item</Text>
      <View style={styles.inputsContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Adicionar"
          onPress={handleAddItem}
          color="#007CF8" // Cor personalizada do botão
        />
      </View>
    </View>
  );
};

export default AddItemForm;
