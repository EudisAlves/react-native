import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
    const onShare = async () => {
       const result = await Share.share({
        message: "Meu imc hoje é: " + props.resultImc,
       }) 
    }
    return (
        <View style={styles.constextImc}>
            <View style={styles.boxShareButton}>
                {props.resultImc != null ? // condicional para verificar se o os campos estão preenchidos
                    <TouchableOpacity 
                    onPress={onShare}// onPress serve adicionar um evento ao botão
                    style={styles.shared}
                    >
                        <Text style={styles.sharedText}>Compartilhar!</Text>
                    </TouchableOpacity>
                    :
                    <View/>
                }
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text> 
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}