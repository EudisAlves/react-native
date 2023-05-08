import React, { Component } from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";


export default function ResultImc(props) {

    const onShere = async () => {
        const result = await Share.share({
           message:"Meu imc hoje é:" + props.resultImc,
        });

    }
   
    return(
        <View style={styles.boxShareButton}>
            
            <View style={styles.resultImc}>
                <Text style={styles.information}>{props.messageResultImc}</Text>
                <Text style={styles.numberImc}>{props.resultImc}</Text>
            </View>

            <View style={styles.contextImc}>
                {props.resultImc != null ?
                <TouchableOpacity
                    onPress={onShere}
                    style={styles.shared}
                >
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>

        </View>
    );
}