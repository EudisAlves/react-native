import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import styles from './ProductListStyles';

const AddItemForm = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [value, setValue] = useState('');
  const scrollViewRef = useRef(null); // Referência para o ScrollView

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

    // Fazer o scroll rolar para o item adicionado
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Adicionar item</Text>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContainer} // Estilo para o ScrollView
      >
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.aviso} >
            O item adicionado vai para o final da lista!
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Adicionar"
          onPress={handleAddItem}
          color="#007AFF" // Cor personalizada do botão
        />
      </View>
    </View>
  );
};


export default AddItemForm;