
import { StyleSheet, View } from 'react-native';
import Title from './components/Title';
import SelectCarne from './components/SelectCarne';


export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <SelectCarne />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
