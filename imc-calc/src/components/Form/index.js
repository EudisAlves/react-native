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

export default function Form(props) {

    const [height, setHeight] = React.useState(null)
    const [weight, setWeight] = React.useState(null)
    const [messageImc, setMessageImc] = useState(null)
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        let totalImc = ((weight / (heightFormat * heightFormat)).toFixed(2))
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
        setImc(totalImc)
    }

    function verificationImc() {
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
        } else {
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preencha o peso altura!")
        }
    }

    return (
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable
                    onPress={Keyboard.dismiss}
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
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable >
                :
                <View style={styles.exhibitionResultImc}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />
                </View>
            }
            <FlatList
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>
                                Meu imc hoje é =
                            </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => item.id.toString()} // Correção nesta linha
            />
        </View>
    );
}
