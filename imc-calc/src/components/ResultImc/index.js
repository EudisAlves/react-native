import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
    const onShare = async () => { // função asincrona para melhorar o consumo da Api de compartilhamento
       const result = await Share.share({
        message: "Meu imc hoje é: " + props.resultImc,
       }) 
    }
    return (
        <View style={styles.constextImc}>
            <View style={styles.boxShareButton}>
            <Text style={styles.information}>{props.messageResultImc}</Text> 
            <Text style={styles.numberImc}>{props.resultImc}</Text>
                <TouchableOpacity 
                    onPress={onShare}// onPress serve adicionar um evento ao botão
                    style={styles.shared}
                >
                    <Text style={styles.sharedText}>Compartilhar!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}