import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Paineldeuser from './src/components/Paineldeuser';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Paineldeuser />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393a3b',
  },
});
