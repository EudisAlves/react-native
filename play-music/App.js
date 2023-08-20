
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/Loading';
import Player from './src/App';

export default function App() {
  return (
    <View style={styles.container}>
     <Loading />
     <Player />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
