import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import ResultImc from "../ResultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {//formula para calcular o imc peso dividido pela altura veses altura
        return setImc((weight/(height * height)).toFixed(2))
    }

    function validationImc() {
       if (weight != null && height != null) {
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("seu imc é igual:")
        setTextButton("Calcular novamente")
        return
       } 
       setImc(null)
       setTextButton("Calcular")
       setMessageImc("preencha o peso altura!")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.50"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 50.355"
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.button}
                onPress = {() => validationImc()}
                >
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            <View></View>
        </View>
    );
}