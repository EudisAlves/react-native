import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable,
    FlatList,
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
    const [imcList, setImcList] = useState([])

    function imcCalculator() {//formula para calcular o imc peso dividido pela altura veses altura
        let heightFormat = height.replace(",", ".")// formatação para o ios que não apresenta . e sim ,
        let totalImc = ((weight / (heightFormat * heightFormat)).toFixed(2))//formula para calcular imc
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
        setImc(totalImc)
    }

    function verificationImc() {// aviso de campos obrigatórios
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório *")
        }
    }

    function validationImc() {// função para verificar os campos de preechimentos
        console.log(imcList)
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("seu imc é igual:")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        } else { // simplificando o código
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preencha o peso altura!")
        }
    }

    return (
        <View style={styles.formContext}>
            {imc == null ? // validação do espaços dos inputs
                <Pressable
                    onPress={Keyboard.dismiss}// função para esconder o teclado 
                    style={styles.form}
                >
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
                        onPress={() => validationImc()}// chamar a função de validação
                    >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable >
                :
                <View style={styles.exhibitionResultImc}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => validationImc()}// chamar a função de validação
                    >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />//aprecer o resultado abaixo do botão calcular
                </View>
            }
            <FlatList
                style={styles.listImc}
                data={imcList.reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.resultItemList}>
                                resultado imc =
                            </Text>
                                {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}
            />
        </View>
    );
}