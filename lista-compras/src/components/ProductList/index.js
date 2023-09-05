import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import styles from './style';
import AddItemForm from './AddItemForm';

const ProductList = () => {
  const [productList, setProductList] = useState([
    { id: 1, name: 'Arroz', quantity: '', value: '' },
    { id: 2, name: 'Feijão', quantity: '', value: '' },
    { id: 3, name: 'Açucar', quantity: '', value: '' },
    { id: 4, name: 'Café', quantity: '', value: '' },
    { id: 5, name: 'Leite', quantity: '', value: '' },
    { id: 13, name: 'Farinha de trigo', quantity: '', value: '' },
    { id: 6, name: 'Óleo', quantity: '', value: '' },
    { id: 7, name: 'Detergente', quantity: '', value: '' },
    { id: 8, name: 'Pasta de dente', quantity: '', value: '' },
    { id: 9, name: 'Sabonete', quantity: '', value: '' },
    { id: 10, name: 'Água sanitária', quantity: '', value: '' },
    { id: 11, name: 'Sabão em pó', quantity: '', value: '' },
    { id: 12, name: 'Desinfetante', quantity: '', value: '' },
  ]);

  const calculateTotal = () => {
    let total = 0;
    productList.forEach((product) => {
      const quantity = parseFloat(product.quantity);
      const value = parseFloat(product.value);
      if (!isNaN(quantity) && !isNaN(value)) {
        total += quantity * value;
      }
    });
    return total.toFixed(2);
  };

  const updateProductQuantity = (id, quantity) => {
    setProductList((prevProductList) =>
      prevProductList.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const updateProductValue = (id, value) => {
    setProductList((prevProductList) =>
      prevProductList.map((product) =>
        product.id === id ? { ...product, value } : product
      )
    );
  };

  const clearInput = (id, field) => {
    setProductList((prevProductList) =>
      prevProductList.map((product) =>
        product.id === id ? { ...product, [field]: '' } : product
      )
    );
  };

  const addItem = (newItem) => {
    const newId = Math.max(...productList.map((product) => product.id)) + 1;
    setProductList((prevProductList) => [
      ...prevProductList,
      { id: newId, ...newItem },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {productList.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <View style={styles.productNameContainer}>
              <Text style={styles.productName}>{product.name}</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Quantidade"
              keyboardType="numeric"
              value={product.quantity}
              onChangeText={(text) => {
                const sanitizedText = text.replace(',', '.');
                updateProductQuantity(product.id, text)
              }}
              onFocus={() => clearInput(product.id, 'quantity')}
            />
            <TextInput
              style={styles.input}
              placeholder="Valor"
              keyboardType="numeric"
              value={product.value}
              onChangeText={(text) => {
                // Substituir vírgulas por pontos automaticamente
                const sanitizedText = text.replace(',', '.');
                updateProductValue(product.id, sanitizedText);
              }}
              onFocus={() => clearInput(product.id, 'value')}
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.addItemFormContainer}>
        <AddItemForm onAddItem={addItem} />
      </View>

      <Text style={styles.totalText}>Total: {calculateTotal()}</Text>
    </View>
  );
};

export default ProductList;





