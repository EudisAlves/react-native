import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import ListaCompras from './src/components/ProductList';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#FC0404', '#FFD278']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Title />
        <ListaCompras />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 15,
  },
});
