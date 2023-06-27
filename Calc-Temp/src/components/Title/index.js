import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

export default function Title() {
    return (
      <View>
        <Text style={styles.text}>Calc Temp</Text>
      </View>
    )
}
