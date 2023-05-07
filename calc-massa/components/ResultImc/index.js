import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {

    const onShere = async () => {
        const resultImc = await Share.share({
           massege:"Meu imc hoje é:" +props.resltImc,
        })
    }

    return(
        <View style={styles.conTextImc}>
            <View style={styles.boxShareButton}>
                {props.resultImc != null ?
                <TouchableOpacity style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
                :
                <View />
                }
            </View >
            <View style={styles.resultImc}>
                <Text style={styles.information}>{props.messageResultImc}</Text>
                <Text style={styles.numberImc}>{props.resultImc}</Text>
            </View>
        </View>
    );
}