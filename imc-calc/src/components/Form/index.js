import React from "react";
import { View, Text, TextInput, Button} from "react-native";

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 1.50"
                keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 50.355"
                keyboardType="numeric"
                />
                <Button title="Calcular IMC"/>
            </View>
            <ResultImc/>
            <View></View>
        </View>
    );
}