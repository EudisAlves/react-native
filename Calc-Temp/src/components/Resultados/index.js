import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.resultbox} >
        <Text> index </Text>
      </View>
    );
  }
}
