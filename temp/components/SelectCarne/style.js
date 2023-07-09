import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containnerSelect: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#999',
        borderRadius: 25,
        margin: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 400,
        color: '#fff',
        padding: 10,
    },
    carne: {
        flexDirection: 'row',
        padding: 5,
    },
    tipoCarne: {
        margin: 5,
    },
    tipoCarne2: {
        margin: 5,
    },
    input: {
        backgroundColor: '#fff',
        width: 90,
    },
    selectedOption: {
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#44f',
        borderRadius: 15,
        padding:5,
      },
  });

export default styles;