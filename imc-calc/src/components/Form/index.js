import React, { useState } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Vibration,
    Keyboard,
    Pressable,
    } from "react-native";
import ResultImc from "../ResultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator() {//formula para calcular o imc peso dividido pela altura veses altura
        let heightFormat = height.replace("," , ".")
        return setImc((weight/(heightFormat * heightFormat)).toFixed(2))
    }

    function verificationImc() {// aviso de campos obrigatórios
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório *")
        }
    }

    function validationImc() {
       if (weight != null && height != null) {
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("seu imc é igual:")
        setTextButton("Calcular novamente")
        setErrorMessage(null)
        return
        } 
       verificationImc()
       setImc(null)
       setTextButton("Calcular")
       setMessageImc("preencha o peso altura!")
    }

    return (
        <Pressable 
        onPress={Keyboard.dismiss}
        style={styles.formContext}
        >
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.50"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
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
        </Pressable>
    );
}