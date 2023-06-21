import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';

import styles from './style';

const ListaCompras = () => {
  const [quantidades, setQuantidades] = useState({});
  const [items, setItems] = useState([
    { nome: 'Arroz..........................', quantidade: '', valor: '' },
    { nome: 'Feijão.........................', quantidade: '', valor: '' },
    { nome: 'Macarrão...................', quantidade: '', valor: '' },
    { nome: 'Açucar.........................', quantidade: '', valor: '' },
    { nome: 'Café.............................', quantidade: '', valor: '' },
    { nome: 'Leite.............................', quantidade: '', valor: '' },
    { nome: 'Sal................................', quantidade: '', valor: '' },
    { nome: 'Oléo...............................', quantidade: '', valor: '' },
    { nome: 'Farinha de mesa..........', quantidade: '', valor: '' },
    { nome: 'Farinha de trigo............', quantidade: '', valor: '' },
    { nome: 'Ovos.............................', quantidade: '', valor: '' },
    { nome: 'Aguá sanitária...............', quantidade: '', valor: '' },
    { nome: 'Sabão em pó................', quantidade: '', valor: '' },
    { nome: 'Sabonete......................', quantidade: '', valor: '' },
    { nome: 'Pasta de dente.............', quantidade: '', valor: '' },
    { nome: 'Detergente..................', quantidade: '', valor: '' },
    { nome: 'Desinfetante..................', quantidade: '', valor: '' },
    { nomeInput: '', quantidade: '', valor: '' }, ,

    // Adicione os outros itens aqui
  ]);

  const adicionarItem = () => {
    if (nomeInput.trim() !== '') {
      setItems((prevItems) => [
        ...prevItems,
        { nomeInput: nomeInput.trim(), quantidade: '', valor: '' },
      ]);
      setNomeInput('');
    }
  };

  const [somaProdutos, setSomaProdutos] = useState(0);

  const handleQuantidadeChange = (item, quantidade) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [item]: quantidade,
    }));
  };

  const handleChangeValor = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].valor = value;
    setItems(updatedItems);
  };


  const calcularValorTotal = () => {
    let soma = 0;
    items.forEach((item) => {
      const quantidade = quantidades[item.nome] || 0;
      const valor = parseFloat(item.valor) || 0;
      soma += quantidade * valor;
    });
    setSomaProdutos(soma);
  };

  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>{item.nome}</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={item.nomeInput}
            onChangeText={(value) => {
              const updatedItems = [...items];
              updatedItems[index].nomeInput = value;
              setItems(updatedItems);
            }}
          />

          <TextInput
            style={styles.input}
            placeholder="Quantidade"
            value={quantidades[item.nome]}
            onChangeText={(value) => handleQuantidadeChange(item.nome, value)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Valor"
            value={item.valor}
            onChangeText={(value) => handleChangeValor(index, value)}
            keyboardType="numeric"
          />
        </View>
      ))}
      <Button
        style={styles.button}
        title="Calcular"
        onPress={calcularValorTotal} />
      
      

      <Text style={styles.somaProdutos}>Soma dos Produtos: R$ {somaProdutos.toFixed(2)}</Text>
      <Button
        style={styles.button}
        title="Adicionar Item"
        onPress={adicionarItem}
      />
    </ScrollView>
  );
};

export default ListaCompras;
