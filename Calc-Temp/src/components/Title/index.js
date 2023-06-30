import React from 'react';
import { Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';

export default function Title() {
  return (
    <View style={styles.statebar} >
      <LinearGradient
         colors={['#ff0000', 'rgba(f, 0, 0, 0.8)', '#000000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.titlebox}
      >
        <Text style={styles.text}>Calc Temp</Text>
        <Image style={styles.img} source={require('../../../assets/img/IMG-20230629-WA0019.jpg')} />
      </LinearGradient>
    </View>
  );
}
