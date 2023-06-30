import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './style';
import Resultados from '../Resultados/index'

export default function Paineldeuser() {
    return (
        <View>
            <Text style={styles.text} >(Preencha as informações à baixo!)</Text>
            <View style={styles.informacion} >
                <View style={styles.inputInfo } >
                    <Text style={styles.label} >Informe à!</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='quantidade!'
                    ></TextInput>

                </View>
                <View style={styles.inputInfo }>
                    <Text
                        style={styles.label}
                    >Selecione o </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='tipo de carne'
                    ></TextInput>

                </View>
            </View>
    
            <View style={styles.buttonContainer}>
                <Button
                    title="Calcular"
                    color="#fe5523" // Cor personalizada do botão
                />
            </View>
        </View>
    );
}
