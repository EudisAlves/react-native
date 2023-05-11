import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
} from "react-native";
import ResultImc from "../ResultImc/";
import styles from "./style";


export default function Form() {

    const [height, setHeight] = useState(null)
    const [weidht, setWeidgt] = useState(null)
    const [messageImc, setMessageImc] = useState("preecha o peso e altura!")
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErroMessage] = useState(null)

    function imcCalculator() { // calcular o imc ( altura vezes altura divido pelo peso)

        let heightFormat = height.replace(",",".") // essa linha é para corrigir o problema do ios com a falta do ponto final no teclado numérico

        return setImc((weidht/(height*height)).toFixed(2))
    }

    function verificationImc() { // verificar se os campos foram preenchidos
        if(imc == null) {
            Vibration.vibrate();
            setErroMessage("Campo obrogatório*")
        }
    }

    function validationImc() { // altera a tela dinamicamente
        if(weidht != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeidgt(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular novamente!")
            setErroMessage(null)
        } else {
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preecha o peso e a altura!")
        }

    }

    return(// a mudança do pressable com o view foi para o resultado ficar no lugar do formulário
        <View  style={styles.formContext}> 
            { imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"

                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeidgt}
                    value={weidht}
                    placeholder="Ex: 80.550"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.buttonCalc}
                onPress={() =>{
                        validationImc()
                    }}
                ><Text style={styles.textButtonCalc}>{TextButton}</Text></TouchableOpacity>

            </Pressable>
            : 
            <View>
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
            </View>
            }
        </View>
    )
}