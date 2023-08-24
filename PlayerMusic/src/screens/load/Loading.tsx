import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

export function Loading() {

  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Button 
        title='PLay'
        onPress={openScreen}
      />
    </View>
  );
}