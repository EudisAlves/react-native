import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
      backgroundColor: "#d1f9f9",
      width: "100%",
      height: "100%",
      padding: 10,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: "center",
      botton: 0,
    },

    form: {
      width: "100%",
      height: "auto",
      marginTop: 30,
      padding: 10,
    },

    formLabel: {
      color: "#000000",
      fontSize: 18,
      paddingLeft: 20,
    },

    input: {
      backgroundColor: "#b7b9b9",
      width: "90%",
      borderRadius: 50,
      height: 40,
      margin: 10,
      padding: 9,
    },
    buttonCalc: {
      borderRadius: 50,
      backgroundColor: '#ff0042',
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 15,
      paddingBottom: 15,
      marginLeft: "18%",
    },

    textButtonCalc: {
      fontSize: 20,
      color: "#ffffff",
    },

    errorMessage: {
      fontSize: 12,
      color: "red",
      fontWeight: "bold",
      paddingLeft: 20,
    },
  });

  export default styles