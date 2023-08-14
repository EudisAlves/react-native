import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containnerSelect: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'rgba(250,216,204,0.562062324929972)',
        borderRadius: 15,
        margin: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 400,
        color: '#373737',
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
        width: 60,
        padding: 5,
        borderRadius: 10,
    },
    selectedOption: {
        backgroundColor: '#f3fb04',
        borderWidth: 1,
        borderColor: '#080808',
        borderRadius: 10,
        padding:2,
      },
    temperoContainer: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 15,
        borderRadius: 20,
      },
      botaoCompartilhar: {
        backgroundColor: '#fa0303',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius:10,
        padding: 5,
        margin: 10,
    },

      shareButton: {
        margin: 20,
        borderWidth: 2,
        padding: 5,
        borderColor: '#000000',
        backgroundColor: '#fa0303',
        borderRadius: 10,
    },
    shareButtonText: {
          color: '#ffff'
      }
  });

export default styles;