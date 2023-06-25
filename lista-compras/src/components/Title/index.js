import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { useFonts } from "expo-font";


export default function Title() {
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('../../../assets/fonts/DancingScript-Bold.ttf'),
      });
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Lista de Compras</Text>
        </View>
    );
}