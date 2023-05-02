import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "../Form/style";

export default function ResultImc(props) {

    const onShere = async () => {
        const result = await Share.share({
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
            </View>
            <Text style={styles.TitleResultImc}>{props.messageResultImc}</Text>
            <Text style={styles.resltImc}>{props.resultImc}</Text>
        </View>
    )
}