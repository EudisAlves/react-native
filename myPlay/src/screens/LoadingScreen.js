// LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2ea',}}>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
