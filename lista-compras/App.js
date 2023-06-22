
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import ListaCompras from './src/components/ProductList';


export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <ListaCompras />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafcda',
    padding: 20,
  },
});
