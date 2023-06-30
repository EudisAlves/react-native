import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Paineldeuser from './src/components/Paineldeuser';
import Resultados from './src/components/Resultados/index'

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Paineldeuser />
      <Resultados />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
